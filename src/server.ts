import fastify from 'fastify'

const app = fastify()

app.listen({ port: 8000 }, (error) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Server is running')
})
