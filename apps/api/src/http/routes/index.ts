import type { FastifyInstance } from 'fastify'

import { autenticateWithGithub } from '@/http/routes/auth/authenticate-with-github'
import { autenticateWithPassword } from '@/http/routes/auth/authenticate-with-password'
import { createAccount } from '@/http/routes/auth/create-account'
// AUTH
import { getProfile } from '@/http/routes/auth/get-profile'
import { requestPasswordRecover } from '@/http/routes/auth/request-password-recover'
import { resetPassword } from '@/http/routes/auth/reset-password'
// ORGANIZATION
import { createOrganization } from '@/http/routes/orgs/create-organization'
import { getMembership } from '@/http/routes/orgs/get-membership'
import { getOrganization } from '@/http/routes/orgs/get-organization'
import { getOrganizations } from '@/http/routes/orgs/get-organizations'
import { updateOrganization } from '@/http/routes/orgs/update-organization'

export async function registerRoutes(app: FastifyInstance) {
  // AUTH
  app.register(getProfile)
  app.register(createAccount)
  app.register(resetPassword)
  app.register(requestPasswordRecover)
  app.register(autenticateWithPassword)
  app.register(autenticateWithGithub)
  // AUTH

  // ORGANIZATION
  app.register(getMembership)
  app.register(createOrganization)
  app.register(getOrganization)
  app.register(getOrganizations)
  app.register(updateOrganization)
  // ORGANIZATION
}
