const { aMiddleware, bMiddleware } = require('./lib/middleware')

const nowHandler = require('./example/now/handler')
const pubSubHandler = require('./example/pubSub/handler')
const todo = require('./example/todo/handler')

async function registerRoutes(service, server) {
  server.get('/', (_, res) => res.json('safe...'))

  server.get('/now', [aMiddleware, bMiddleware], await nowHandler.now(service))
  
  server.get('/pub', await pubSubHandler.index(service))

  server.use('/todo', await todo.handler(service))
  
}

module.exports = {
  registerRoutes,
}