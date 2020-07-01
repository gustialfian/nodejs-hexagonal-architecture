const { aMiddleware, bMiddleware } = require('./lib/middleware')

const nowHandler = require('./example/now/handler')
const pubSubHandler = require('./example/pubSub/handler')

async function registerRoutes(service, server) {
  server.get('/', (_, res) => res.json('safe...'))

  server.get('/now', [aMiddleware, bMiddleware], await nowHandler.now(service))
  
  server.get('/pub', await pubSubHandler.index(service))

}

module.exports = {
  registerRoutes,
}