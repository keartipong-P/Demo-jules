import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { AccountType } from "../../../../generated/prisma";

export const reportsRouter = createTRPCRouter({
  getTrialBalance: publicProcedure
    .input(z.object({ asOfDate: z.date().optional() }))
    .query(async ({ ctx, input }) => {
      const accounts = await ctx.db.account.findMany({
        orderBy: { code: "asc" },
      });

      const whereClause = input.asOfDate
        ? { journalEntry: { date: { lte: input.asOfDate } } }
        : {};

      const lines = await ctx.db.journalEntryLine.findMany({
        where: whereClause,
      });

      const balances = accounts.map((acc) => {
        const accountLines = lines.filter((l) => l.accountId === acc.id);
        const totalDebit = accountLines
          .filter((l) => l.isDebit)
          .reduce((sum, l) => sum + l.amount, 0);
        const totalCredit = accountLines
          .filter((l) => !l.isDebit)
          .reduce((sum, l) => sum + l.amount, 0);

        let balance = 0;
        let isDebitBalance = true;

        if (
          acc.type === AccountType.ASSET ||
          acc.type === AccountType.EXPENSE
        ) {
          balance = totalDebit - totalCredit;
          isDebitBalance = balance >= 0;
          balance = Math.abs(balance);
        } else {
          balance = totalCredit - totalDebit;
          isDebitBalance = balance < 0; // If negative, it means debit exceeded credit
          balance = Math.abs(balance);
        }

        return {
          account: acc,
          debit: isDebitBalance ? balance : 0,
          credit: !isDebitBalance ? balance : 0,
        };
      });

      return balances.filter((b) => b.debit > 0 || b.credit > 0);
    }),

  getGeneralLedger: publicProcedure
    .input(
      z.object({
        accountId: z.number(),
        startDate: z.date().optional(),
        endDate: z.date().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const account = await ctx.db.account.findUnique({
        where: { id: input.accountId },
      });

      if (!account) {
        throw new Error("Account not found");
      }

      const whereClause: any = { accountId: input.accountId };

      if (input.startDate || input.endDate) {
          whereClause.journalEntry = { date: {} };
          if (input.startDate) whereClause.journalEntry.date.gte = input.startDate;
          if (input.endDate) whereClause.journalEntry.date.lte = input.endDate;
      }

      const lines = await ctx.db.journalEntryLine.findMany({
        where: whereClause,
        include: {
          journalEntry: true,
        },
        orderBy: {
          journalEntry: { date: "asc" },
        },
      });

      let currentBalance = 0;

      const ledgerEntries = lines.map((line) => {
        const isNormalDebit = account.type === AccountType.ASSET || account.type === AccountType.EXPENSE;

        if (isNormalDebit) {
            currentBalance += line.isDebit ? line.amount : -line.amount;
        } else {
            currentBalance += line.isDebit ? -line.amount : line.amount;
        }

        return {
          id: line.id,
          date: line.journalEntry.date,
          description: line.journalEntry.description,
          debit: line.isDebit ? line.amount : 0,
          credit: !line.isDebit ? line.amount : 0,
          balance: currentBalance,
        };
      });

      return {
          account,
          entries: ledgerEntries
      };
    }),
});
