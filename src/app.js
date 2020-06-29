const { Server } = require('./lib/server')
const nowHandler = require('./now/handler')

async function start() {
  try {
    const server = new Server()
    await server.setupDB()

    server.router.get('/', (_, res) => res.json('safe...'))
    server.router.get('/now', await nowHandler.now(server))

    server.listen()

  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  start,
}