const nowHandler = require('./now/handler')
const { aMiddleware, bMiddleware } = require('./lib/middleware')

async function registerRoutes(server) {

  server.router.get('/', (_, res) => res.json('safe...'))
  server.router.get('/now', [aMiddleware, bMiddleware], await nowHandler.now(server))

}

module.exports = {
  registerRoutes,
}