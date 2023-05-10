import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const sessionsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.sessions.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.sessions.findMany({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
        source: z.string(),
        token: z.string(),
        dateCreated: z.string().datetime(),
        expiry: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
        source: z.string(),
        token: z.string(),
        dateCreated: z.string().datetime(),
        expiry: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
    updateUserId: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userId: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
    updateSource: publicProcedure
    .input(
      z.object({
        id: z.string(),
        source: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
    updateToken: publicProcedure
    .input(
      z.object({
        id: z.string(),
        token: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.update({
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
      return ctx.prisma.sessions.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
    updateExpiry: publicProcedure
    .input(
      z.object({
        id: z.string(),
        expiry: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.sessions.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),      
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.sessions.delete({ where: { id: input } });
  }),
});
