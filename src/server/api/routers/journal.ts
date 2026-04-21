import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const journalRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        date: z.date(),
        description: z.string().min(1),
        lines: z
          .array(
            z.object({
              accountId: z.number(),
              amount: z.number().positive(),
              isDebit: z.boolean(),
            }),
          )
          .min(2, "A journal entry must have at least two lines (Debit and Credit)."),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Validate double entry accounting principle
      let totalDebits = 0;
      let totalCredits = 0;

      for (const line of input.lines) {
        if (line.isDebit) {
          totalDebits += line.amount;
        } else {
          totalCredits += line.amount;
        }
      }

      // Allow small floating point discrepancies, or use a smaller epsilon
      if (Math.abs(totalDebits - totalCredits) > 0.01) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Total debits (${totalDebits}) do not equal total credits (${totalCredits}).`,
        });
      }

      return ctx.db.journalEntry.create({
        data: {
          date: input.date,
          description: input.description,
          lines: {
            create: input.lines.map((line) => ({
              accountId: line.accountId,
              amount: line.amount,
              isDebit: line.isDebit,
            })),
          },
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.journalEntry.findMany({
      include: {
        lines: {
          include: {
            account: true,
          },
        },
      },
      orderBy: { date: "desc" },
    });
  }),
});
