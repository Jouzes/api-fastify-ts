import fastify from 'fastify'
import { env } from './env/index.js'

const app = fastify()

app.listen({ port: env.PORT }, (error) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Server is running')
})
