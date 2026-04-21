import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { AccountType } from "../../../../generated/prisma";

export const accountRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        code: z.string().min(1),
        name: z.string().min(1),
        type: z.nativeEnum(AccountType),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.account.create({
        data: {
          code: input.code,
          name: input.name,
          type: input.type,
        },
      });
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.account.findMany({
      orderBy: { code: "asc" },
    });
  }),
});
