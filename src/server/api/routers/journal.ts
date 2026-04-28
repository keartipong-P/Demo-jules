import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const journalRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        date: z.date(),
        description: z.string().min(1).max(255),
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

      // Check if period is closed
      const period = await ctx.db.accountingPeriod.findFirst({
        where: {
          startDate: { lte: input.date },
          endDate: { gte: input.date },
        },
      });

      if (period?.isClosed) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Cannot create entry in a closed accounting period.",
        });
      }

      return ctx.db.journalEntry.create({
        data: {
          date: input.date,
          description: input.description,
          status: "PENDING",
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

  approve: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const entry = await ctx.db.journalEntry.findUnique({
        where: { id: input.id },
      });

      if (!entry) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Journal entry not found" });
      }

      if (entry.status !== "PENDING") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Only pending entries can be approved" });
      }

      // Check if period is closed
      const period = await ctx.db.accountingPeriod.findFirst({
        where: {
          startDate: { lte: entry.date },
          endDate: { gte: entry.date },
        },
      });

      if (period?.isClosed) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Cannot approve entry in a closed accounting period.",
        });
      }

      return ctx.db.journalEntry.update({
        where: { id: input.id },
        data: { status: "APPROVED", rejectionReason: null },
      });
    }),

  reject: publicProcedure
    .input(z.object({ id: z.number(), reason: z.string().min(1).max(255) }))
    .mutation(async ({ ctx, input }) => {
      const entry = await ctx.db.journalEntry.findUnique({
        where: { id: input.id },
      });

      if (!entry) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Journal entry not found" });
      }

      if (entry.status !== "PENDING") {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Only pending entries can be rejected" });
      }

      return ctx.db.journalEntry.update({
        where: { id: input.id },
        data: { status: "REJECTED", rejectionReason: input.reason },
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
