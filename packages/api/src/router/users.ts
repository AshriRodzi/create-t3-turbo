import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const usersRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany({ orderBy: { dateCreated: "desc" } });
  }),
  sanspaper: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany({
      where: {
        email: { contains: "sanspaper" },
      },
      orderBy: { dateCreated: "desc" },
    });
  }),
  byEmail: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.users.findMany({ where: { email: input.email } });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.users.findMany({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        settings: z.any().optional(),
        role: z.string(),
        phoneNumber: z.string().optional().nullable(),
        jobTitle: z.string().optional().nullable(),
        email: z.string().email(),
        name: z.string(),
        password: z.string(),
        dateCreated: z.string().datetime(),
        upviseAccounts: z.any().optional(),
        lastActive: z.string().datetime().optional().nullable(),
        emailVerified: z.boolean().optional().nullable(),
        notifications: z.any().optional(),
        services: z.any().optional(),
        resetPasswordExpires: z.string().datetime().optional().nullable(),
        resetPasswordToken: z.string().optional().nullable(),
        hash: z.string().optional().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        settings: z.any().optional(),
        role: z.string(),
        phoneNumber: z.string().optional().nullable(),
        jobTitle: z.string().optional().nullable(),
        email: z.string().email(),
        name: z.string(),
        password: z.string(),
        dateCreated: z.string().datetime(),
        upviseAccounts: z.any().optional(),
        lastActive: z.string().datetime().optional().nullable(),
        emailVerified: z.boolean().optional().nullable(),
        notifications: z.any().optional(),
        services: z.any().optional(),
        resetPasswordExpires: z.string().datetime().optional().nullable(),
        resetPasswordToken: z.string().optional().nullable(),
        hash: z.string().optional().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.users.delete({ where: { id: input } });
  }),
});
