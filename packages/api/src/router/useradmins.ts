import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const useradminsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.useradmins.findMany({ orderBy: { dateCreated: "desc" } });
  }),
  byEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.useradmins.findMany({ where: { email: input.email } });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.useradmins.findMany({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any().optional(),
        settings: z.any().optional(),
        emailVerified: z.boolean().optional().nullable(),
        role: z.string(),
        phoneNumber: z.string().optional().nullable(),
        jobTitle: z.string().optional().nullable(),
        email: z.string().email(),
        name: z.string(),
        password: z.string(),
        hash: z.string().optional().nullable(),
        dateCreated: z.string().datetime(),
        notifications: z.any().optional(),
        lastActive: z.string().datetime().optional().nullable(),
        upviseAccounts: z.any().optional(),
        resetPasswordExpires: z.string().datetime().optional().nullable(),
        resetPasswordToken: z.string().optional().nullable(),
        
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.useradmins.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any().optional(),
        settings: z.any().optional(),
        emailVerified: z.boolean().optional().nullable(),
        role: z.string(),
        phoneNumber: z.string().optional().nullable(),
        jobTitle: z.string().optional().nullable(),
        email: z.string().email(),
        name: z.string(),
        password: z.string(),
        hash: z.string().optional().nullable(),
        dateCreated: z.string().datetime(),
        notifications: z.any().optional(),
        lastActive: z.string().datetime().optional().nullable(),
        upviseAccounts: z.any().optional(),
        resetPasswordExpires: z.string().datetime().optional().nullable(),
        resetPasswordToken: z.string().optional().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.useradmins.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.useradmins.delete({ where: { id: input } });
  }),
});
