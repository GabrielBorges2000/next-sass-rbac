import fastifyCors from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { registerRoutes } from '@/http/routes'
import { errorHandler } from '@/http/routes/error-handle'
import { jwtSetup } from '@/lib/jwt'
import { swaggerSetup } from '@/lib/swagger'

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.setErrorHandler(errorHandler)

swaggerSetup(app)
jwtSetup(app)

app.register(fastifyCors)

registerRoutes(app)
