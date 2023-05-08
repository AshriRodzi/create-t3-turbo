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
  updateServices: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateSettings: publicProcedure
    .input(
      z.object({
        id: z.string(),
        settings: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateEmailVerified: publicProcedure
    .input(
      z.object({
        id: z.string(),
        emailVerified: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateRole: publicProcedure
    .input(
      z.object({
        id: z.string(),
        role: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updatePhoneNumber: publicProcedure
    .input(
      z.object({
        id: z.string(),
        phoneNumber: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateJobTitle: publicProcedure
    .input(
      z.object({
        id: z.string(),
        jobTitle: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateEmail: publicProcedure
    .input(
      z.object({
        id: z.string(),
        email: z.string().email(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updatePassword: publicProcedure
    .input(
      z.object({
        id: z.string(),
        password: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateName: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateHash: publicProcedure
    .input(
      z.object({
        id: z.string(),
        hash: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateDateCreated: publicProcedure
    .input(
      z.object({
        id: z.string(),
        dateCreated: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateNotifications: publicProcedure
    .input(
      z.object({
        id: z.string(),
        notifications: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateLastActive: publicProcedure
    .input(
      z.object({
        id: z.string(),
        lastActive: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateUpviseAccounts: publicProcedure
    .input(
      z.object({
        id: z.string(),
        upviseAccounts: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateResetPasswordExpires: publicProcedure
    .input(
      z.object({
        id: z.string(),
        resetPasswordExpires: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.users.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateResetPasswordToken: publicProcedure
    .input(
      z.object({
        id: z.string(),
        resetPasswordToken: z.string(),
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
