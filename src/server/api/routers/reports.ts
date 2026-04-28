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

      const baseWhereClause = { journalEntry: { status: "APPROVED" } };
      const whereClause = input.asOfDate
        ? { ...baseWhereClause, journalEntry: { ...baseWhereClause.journalEntry, date: { lte: input.asOfDate } } }
        : baseWhereClause;

      const lines = await ctx.db.journalEntryLine.findMany({
        // @ts-ignore
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

  getIncomeStatement: publicProcedure
    .input(z.object({ startDate: z.date(), endDate: z.date(), costCenterId: z.number().optional() }))
    .query(async ({ ctx, input }) => {
      const accounts = await ctx.db.account.findMany({
        where: {
          type: { in: [AccountType.REVENUE, AccountType.EXPENSE] }
        },
        orderBy: { code: "asc" }
      });

      const whereClause: any = {
        journalEntry: {
          status: "APPROVED",
          date: { gte: input.startDate, lte: input.endDate }
        }
      };

      if (input.costCenterId) {
        whereClause.costCenterId = input.costCenterId;
      }

      const lines = await ctx.db.journalEntryLine.findMany({
        where: whereClause
      });

      let totalRevenue = 0;
      let totalExpense = 0;

      const revenues = accounts.filter(a => a.type === AccountType.REVENUE).map(acc => {
        const accLines = lines.filter(l => l.accountId === acc.id);
        const credit = accLines.filter(l => !l.isDebit).reduce((s, l) => s + l.amount, 0);
        const debit = accLines.filter(l => l.isDebit).reduce((s, l) => s + l.amount, 0);
        const balance = credit - debit;
        totalRevenue += balance;
        return { account: acc, balance };
      }).filter(a => a.balance !== 0);

      const expenses = accounts.filter(a => a.type === AccountType.EXPENSE).map(acc => {
        const accLines = lines.filter(l => l.accountId === acc.id);
        const debit = accLines.filter(l => l.isDebit).reduce((s, l) => s + l.amount, 0);
        const credit = accLines.filter(l => !l.isDebit).reduce((s, l) => s + l.amount, 0);
        const balance = debit - credit;
        totalExpense += balance;
        return { account: acc, balance };
      }).filter(a => a.balance !== 0);

      return {
        revenues,
        expenses,
        totalRevenue,
        totalExpense,
        netIncome: totalRevenue - totalExpense
      };
    }),

  getBalanceSheet: publicProcedure
    .input(z.object({ asOfDate: z.date() }))
    .query(async ({ ctx, input }) => {
      const accounts = await ctx.db.account.findMany({
        where: {
          type: { in: [AccountType.ASSET, AccountType.LIABILITY, AccountType.EQUITY, AccountType.REVENUE, AccountType.EXPENSE] }
        },
        orderBy: { code: "asc" }
      });

      const lines = await ctx.db.journalEntryLine.findMany({
        where: {
          journalEntry: {
            status: "APPROVED",
            date: { lte: input.asOfDate }
          }
        }
      });

      let totalAssets = 0;
      let totalLiabilities = 0;
      let totalEquity = 0;

      const assets = accounts.filter(a => a.type === AccountType.ASSET).map(acc => {
        const accLines = lines.filter(l => l.accountId === acc.id);
        const debit = accLines.filter(l => l.isDebit).reduce((s, l) => s + l.amount, 0);
        const credit = accLines.filter(l => !l.isDebit).reduce((s, l) => s + l.amount, 0);
        const balance = debit - credit;
        totalAssets += balance;
        return { account: acc, balance };
      }).filter(a => a.balance !== 0);

      const liabilities = accounts.filter(a => a.type === AccountType.LIABILITY).map(acc => {
        const accLines = lines.filter(l => l.accountId === acc.id);
        const credit = accLines.filter(l => !l.isDebit).reduce((s, l) => s + l.amount, 0);
        const debit = accLines.filter(l => l.isDebit).reduce((s, l) => s + l.amount, 0);
        const balance = credit - debit;
        totalLiabilities += balance;
        return { account: acc, balance };
      }).filter(a => a.balance !== 0);

      const equity = accounts.filter(a => a.type === AccountType.EQUITY).map(acc => {
        const accLines = lines.filter(l => l.accountId === acc.id);
        const credit = accLines.filter(l => !l.isDebit).reduce((s, l) => s + l.amount, 0);
        const debit = accLines.filter(l => l.isDebit).reduce((s, l) => s + l.amount, 0);
        const balance = credit - debit;
        totalEquity += balance;
        return { account: acc, balance };
      }).filter(a => a.balance !== 0);

      // Calculate Retained Earnings (Net Income from REVENUE and EXPENSE up to the date)
      let retainedEarnings = 0;
      const plLines = lines.filter(l => {
        const acc = accounts.find(a => a.id === l.accountId);
        return acc && (acc.type === AccountType.REVENUE || acc.type === AccountType.EXPENSE);
      });

      plLines.forEach(l => {
        const acc = accounts.find(a => a.id === l.accountId)!;
        if (acc.type === AccountType.REVENUE) {
          retainedEarnings += l.isDebit ? -l.amount : l.amount;
        } else if (acc.type === AccountType.EXPENSE) {
          retainedEarnings += l.isDebit ? -l.amount : l.amount;
        }
      });

      totalEquity += retainedEarnings;

      return {
        assets,
        liabilities,
        equity,
        retainedEarnings,
        totalAssets,
        totalLiabilitiesAndEquity: totalLiabilities + totalEquity
      };
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

      const whereClause: any = { accountId: input.accountId, journalEntry: { status: "APPROVED" } };

      if (input.startDate || input.endDate) {
          whereClause.journalEntry.date = {};
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

  getAgingReport: publicProcedure
    .input(z.object({ type: z.enum(["RECEIVABLE", "PAYABLE"]), asOfDate: z.date() }))
    .query(async ({ ctx, input }) => {
      const invoices = await ctx.db.invoice.findMany({
        where: {
          type: input.type,
          status: { in: ["OPEN", "DRAFT"] },
          date: { lte: input.asOfDate }
        },
        include: { contact: true }
      });

      const today = input.asOfDate.getTime();

      const buckets = {
        current: 0,
        days30: 0,
        days60: 0,
        days90: 0,
        older: 0
      };

      const agingByContact: Record<number, any> = {};

      invoices.forEach(inv => {
        const dueTime = inv.dueDate.getTime();
        const diffDays = Math.max(0, Math.floor((today - dueTime) / (1000 * 60 * 60 * 24)));
        const amount = inv.totalAmount;

        let bucket = "current";
        if (diffDays > 90) bucket = "older";
        else if (diffDays > 60) bucket = "days90";
        else if (diffDays > 30) bucket = "days60";
        else if (diffDays > 0) bucket = "days30";

        // @ts-ignore
        buckets[bucket] += amount;

        if (!agingByContact[inv.contact.id]) {
          agingByContact[inv.contact.id] = {
            contact: inv.contact,
            current: 0,
            days30: 0,
            days60: 0,
            days90: 0,
            older: 0,
            total: 0
          };
        }
        agingByContact[inv.contact.id][bucket] += amount;
        agingByContact[inv.contact.id].total += amount;
      });

      return {
        summary: buckets,
        details: Object.values(agingByContact)
      };
    }),
});
