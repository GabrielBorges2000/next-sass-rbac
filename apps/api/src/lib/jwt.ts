import fastifyJwt from '@fastify/jwt'
import { env } from '@saas/env'
import type { FastifyInstance } from 'fastify'

export async function jwtSetup(app: FastifyInstance) {
  app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
  })
}
