const { Service } = require('./lib/service')
const { setupExpress, listen } = require('./lib/express')
const { registerRoutes } = require('./routes')
const { registerSubscriber } = require('./subscribers')

async function start() {
  try {
    const service = new Service()
    await service.setup()

    const server = setupExpress()
    
    await registerRoutes(service, server)
    await registerSubscriber(service)
    
    listen(server)
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  start,
}