const { aMiddleware, bMiddleware } = require('./lib/middleware')

const nowHandler = require('./example/now/handler')
const pubSubHandler = require('./example/pubSub/handler')

async function registerRoutes(service) {

  service.router.get('/', (_, res) => res.json('safe...'))
  service.router.get('/now', [aMiddleware, bMiddleware], await nowHandler.now(service))
  service.router.get('/pub', await pubSubHandler.index(service))

}

module.exports = {
  registerRoutes,
}