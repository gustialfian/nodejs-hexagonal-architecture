const { Service } = require('./lib/service')
const { setupExpress, listen } = require('./lib/express')
const { registerRoutes } = require('./routes')
const { registerSubscriber } = require('./subscribers')

async function start() {
  try {
    const service = new Service()

    await service.setupDB()
    await service.setupBroker()
    
    await registerRoutes(service, server)
    await registerSubscriber(service)
    
    const server = setupExpress()
    listen(server)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  start,
}