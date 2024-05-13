import { roleSchema } from '@saas/auth'
import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import z from 'zod'

import { auth } from '@/http/middlewares/auth'
import { prisma } from '@/lib/prisma'

export async function getOrganizations(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/organizations',
      {
        schema: {
          tags: ['organizations'],
          summary: 'Get organization where user is a member',
          security: [{ bearerAuth: [] }],
          response: {
            201: z.object({
              organization: z.array(
                z.object({
                  id: z.string().uuid(),
                  name: z.string(),
                  slug: z.string(),
                  avatarUrl: z.string().url().nullable(),
                  role: roleSchema,
                }),
              ),
            }),
          },
        },
      },
      async (request) => {
        const userId = await request.getCurrentUserId()

        const organizations = await prisma.organization.findMany({
          select: {
            id: true,
            name: true,
            slug: true,
            avatarUrl: true,
            member: {
              select: {
                role: true,
              },
              where: {
                userId,
              },
            },
          },
          where: {
            member: {
              some: {
                userId,
              },
            },
          },
        })

        const organizationsWithuserRole = organizations.map(
          ({ member, ...org }) => {
            return {
              ...org,
              role: roleSchema.parse(member[0].role),
            }
          },
        )

        return {
          organizations: organizationsWithuserRole,
        }
      },
    )
}
