import { env } from '@saas/env'

import { app } from '@/http/app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 HTTP Server Running on Port ${env.PORT}!`)
  })
