import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const supportticketsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.supporttickets.findMany({ orderBy: { id: "desc" } });
  }),
  byOrg: publicProcedure
    .input(z.object({ organisation: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { organisation: input.organisation } });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { id: input.id } });
    }),
  byStatus: publicProcedure
    .input(z.object({ status: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { status: input.status }, orderBy: { id: "desc" } });
    }),
  bySeverity: publicProcedure
    .input(z.object({ severity: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { severity: input.severity }, orderBy: { id: "desc" } });
    }),
  byApp: publicProcedure
    .input(z.object({ relevantApp: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { relevantApp: input.relevantApp }, orderBy: { id: "desc" } });
    }),
  byType: publicProcedure
    .input(z.object({ type: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { type: input.type }, orderBy: { id: "desc" } });
    }),
  byOrganisation: publicProcedure
    .input(z.object({ organisation: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { organisation: input.organisation }, orderBy: { id: "desc" } });
    }),
  byReporter: publicProcedure
    .input(z.object({ reporter: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { reporter: input.reporter }, orderBy: { id: "desc" } });
    }),
  bySupport: publicProcedure
    .input(z.object({ support: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.supporttickets.findMany({ where: { support: input.support }, orderBy: { id: "desc" } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.string(),
        title: z.string(),
        relevantApp: z.string(),
        severity: z.string(),
        type: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        organisation: z.string(),
        dateOpened: z.string().datetime(),
        comments: z.any().optional().nullable(),
        timelogs: z.any().optional().nullable(),
        reporter: z.string().optional().nullable(),
        support: z.string().optional().nullable(),
        attachments: z.any().optional().nullable(),
        billable: z.string().optional().nullable(),
        ticketNumber: z.string().optional().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.string(),
        title: z.string(),
        relevantApp: z.string(),
        severity: z.string(),
        type: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        organisation: z.string(),
        dateOpened: z.string().datetime(),
        comments: z.any().optional().nullable(),
        timelogs: z.any().optional().nullable(),
        reporter: z.string().optional().nullable(),
        support: z.string().optional().nullable(),
        attachments: z.any().optional().nullable(),
        billable: z.string().optional().nullable(),
        ticketNumber: z.string().optional().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateStatus: publicProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateTitle: publicProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateRelevantApp: publicProcedure
    .input(
      z.object({
        id: z.string(),
        relevantApp: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateSeverity: publicProcedure
    .input(
      z.object({
        id: z.string(),
        severity: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateType: publicProcedure
    .input(
      z.object({
        id: z.string(),
        type: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateDescription: publicProcedure
    .input(
      z.object({
        id: z.string(),
        description: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateOrganisation: publicProcedure
    .input(
      z.object({
        id: z.string(),
        organisation: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateDateOpened: publicProcedure
    .input(
      z.object({
        id: z.string(),
        dateOpened: z.string().datetime(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateComments: publicProcedure
    .input(
      z.object({
        id: z.string(),
        comments: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateTimelogs: publicProcedure
    .input(
      z.object({
        id: z.string(),
        timelogs: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateReporter: publicProcedure
    .input(
      z.object({
        id: z.string(),
        reporter: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateSupport: publicProcedure
    .input(
      z.object({
        id: z.string(),
        support: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateAttachments: publicProcedure
    .input(
      z.object({
        id: z.string(),
        attachments: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateBillable: publicProcedure
    .input(
      z.object({
        id: z.string(),
        billable: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateTicketNumber: publicProcedure
    .input(
      z.object({
        id: z.string(),
        ticketNumber: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.supporttickets.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.supporttickets.delete({ where: { id: input } });
  }),
});
