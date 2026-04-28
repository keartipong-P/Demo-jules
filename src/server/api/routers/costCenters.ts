import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const costCentersRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        code: z.string().min(1),
        name: z.string().min(1),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Basic check for unique code
      const existing = await ctx.db.costCenter.findUnique({
        where: { code: input.code },
      });
      if (existing) {
        throw new TRPCError({ code: "CONFLICT", message: "Cost center code already exists." });
      }

      return ctx.db.costCenter.create({
        data: {
          code: input.code,
          name: input.name,
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.costCenter.findMany({
      orderBy: { code: "asc" },
    });
  }),
});
