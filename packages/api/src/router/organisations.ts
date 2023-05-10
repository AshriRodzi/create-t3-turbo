import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const organisationsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.organisations.findMany({ orderBy: { id: "desc" } });
  }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.organisations.findMany({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any().optional(),
        billing: z.any().optional(),
        partnerCode: z.string().optional().nullable(),
        name: z.string(),
        dateCreated: z.string().datetime(),
        supportPlans: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        userCap: z.number().nullable(),
        logo: z.string().optional().nullable(),
        bokDate: z.string().datetime().nullable(),
        offlineDate: z.string().datetime().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any().optional(),
        billing: z.any().optional(),
        partnerCode: z.string().optional().nullable(),
        name: z.string(),
        dateCreated: z.string().datetime(),
        supportPlans: z.string().optional().nullable(),
        address: z.string().optional().nullable(),
        phone: z.string().optional().nullable(),
        website: z.string().optional().nullable(),
        userCap: z.number().nullable(),
        logo: z.string().optional().nullable(),
        bokDate: z.string().datetime().nullable(),
        offlineDate: z.string().datetime().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateService: publicProcedure
    .input(
      z.object({
        id: z.string(),
        services: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateBilling: publicProcedure
    .input(
      z.object({
        id: z.string(),
        billing: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updatePartnerCode: publicProcedure
    .input(
      z.object({
        id: z.string(),
        partnerCode: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
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
      return ctx.prisma.organisations.update({
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
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateSupportPlans: publicProcedure
    .input(
      z.object({
        id: z.string(),
        supportPlans: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateAddress: publicProcedure
    .input(
      z.object({
        id: z.string(),
        address: z.string().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updatePhone: publicProcedure
    .input(
      z.object({
        id: z.string(),
        phone: z.string().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateWebsite: publicProcedure
    .input(
      z.object({
        id: z.string(),
        website: z.string().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateUserCap: publicProcedure
    .input(
      z.object({
        id: z.string(),
        userCap: z.number().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateLogo: publicProcedure
    .input(
      z.object({
        id: z.string(),
        logo: z.string().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateBokDate: publicProcedure
    .input(
      z.object({
        id: z.string(),
        bokDate: z.string().datetime().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateOfflineDate: publicProcedure
    .input(
      z.object({
        id: z.string(),
        offlineDate: z.string().datetime().nullable(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.organisations.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),                              
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.organisations.delete({ where: { id: input } });
  }),
});
