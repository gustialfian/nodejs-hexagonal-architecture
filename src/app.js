const { Service } = require('./lib/service')
const { registerRoutes } = require('./routes')

async function start() {
  try {
    const service = new Service()

    await service.setupDB()

    await registerRoutes(service)

    service.listen()

  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  start,
}