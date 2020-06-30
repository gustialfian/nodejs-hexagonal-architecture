const { Service } = require('./lib/service')
const { registerRoutes } = require('./routes')
const { testSubscriber } = require('./example/pubSub/subscriber')

async function start() {
  try {
    const service = new Service()

    await service.setupDB()
    await service.setupBroker()

    // pub sub
    testSubscriber(service)

    await registerRoutes(service)

    service.listen()
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  start,
}