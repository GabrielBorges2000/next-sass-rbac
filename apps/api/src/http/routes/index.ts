import type { FastifyInstance } from 'fastify'

import { autenticateWithPassword } from '@/http/routes/auth/authenticate-with-password'
import { createAccount } from '@/http/routes/auth/create-account'
// AUTH
import { getProfile } from '@/http/routes/auth/get-profile'

import { autenticateWithGithub } from './auth/authenticate-with-github'
import { requestPasswordRecover } from './auth/request-password-recover'
import { resetPassword } from './auth/reset-password'
// AUTH

export async function registerRoutes(app: FastifyInstance) {
  // AUTH
  app.register(getProfile)
  app.register(createAccount)
  app.register(resetPassword)
  app.register(requestPasswordRecover)
  app.register(autenticateWithPassword)
  app.register(autenticateWithGithub)
  // AUTH
}
