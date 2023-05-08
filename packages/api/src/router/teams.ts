import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

/**
 * Note *
 * Prisma method findMany will always return an array, where findFirst/findUnique return an object
 * For Json field, please do not use null or it will cause error. Use []
 */

export const teamsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.teams.findMany({ orderBy: { id: "desc" } });
  }),
  byOrg: publicProcedure
    .input(z.object({ organisation: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.teams.findMany({ where: { organisation: input.organisation } });
    }),
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.teams.findMany({ where: { id: input.id } });
    }),
  create: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isEnabled: z.boolean(),
        name: z.string(),
        description: z.string(),
        colour: z.string().optional().nullable(),
        service: z.string(),
        organisation: z.string(),
        members: z.any(),
        managers: z.any(),
        option: z.any(),
        dateCreated: z.string().datetime(),
        savedDashboards: z.any().optional().nullable(),
        inspectionKeyClients: z.any().optional().nullable(),
        inspectionKeyOrganisations: z.any().optional().nullable(),
        responsibleParties: z.any().optional().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.create({ data: input });
    }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isEnabled: z.boolean(),
        name: z.string(),
        description: z.string(),
        colour: z.string().optional().nullable(),
        service: z.string(),
        organisation: z.string(),
        members: z.any(),
        managers: z.any(),
        option: z.any(),
        dateCreated: z.string().datetime(),
        savedDashboards: z.any().optional().nullable(),
        inspectionKeyClients: z.any().optional().nullable(),
        inspectionKeyOrganisations: z.any().optional().nullable(),
        responsibleParties: z.any().optional().nullable()
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateIsEnabled: publicProcedure
    .input(
      z.object({
        id: z.string(),
        isEnabled: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
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
      return ctx.prisma.teams.update({
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
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateColour: publicProcedure
    .input(
      z.object({
        id: z.string(),
        colour: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateService: publicProcedure
    .input(
      z.object({
        id: z.string(),
        service: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
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
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateMembers: publicProcedure
    .input(
      z.object({
        id: z.string(),
        members: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateManagers: publicProcedure
    .input(
      z.object({
        id: z.string(),
        managers: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateOption: publicProcedure
    .input(
      z.object({
        id: z.string(),
        option: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateSavedDashboard: publicProcedure
    .input(
      z.object({
        id: z.string(),
        savedDashboards: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
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
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateInspectionKeyClients: publicProcedure
    .input(
      z.object({
        id: z.string(),
        inspectionKeyClients: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateInspectionKeyOrganisations: publicProcedure
    .input(
      z.object({
        id: z.string(),
        inspectionKeyOrganisations: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  updateResponsibleParties: publicProcedure
    .input(
      z.object({
        id: z.string(),
        responsibleParties: z.any(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.teams.update({
        where: {
          id: input.id,
        }, data: input
      });
    }),
  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.teams.delete({ where: { id: input } });
  }),
});
