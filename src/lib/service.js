const http = require('http')

const { setupExpress } = require('./express')
const { setupDB } = require('./postgresql')
const { setupBroker } = require('./rabbitmq')

class Service {
  constructor() {
    console.log(`Constructing Server...`)

    // sync dependencies
    this.router = setupExpress()

    // async dependencies
    this._db = null
    this._broker = null
  }

  listen() {
    const server = http.createServer(this.router)
    server.listen(3000, () => {
      console.log(`Listening on localhost:${3000}`)
    })
  }

  async setupDB() {
    try {
      this._db = await setupDB()
    } catch (error) {
      throw error
    }
  }

  async setupBroker() {
    try {
      this._broker = await setupBroker()
    } catch (error) {
      throw error
    }
  }

  async emit(exchange, message) {
    try {
      const channel = await this._broker.createChannel()

      channel.assertExchange(exchange, 'fanout', { durable: false })
      channel.publish(exchange, '', Buffer.from(message))

      console.log(`emited on ${exchange}: ${message}`)

    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  Service,
}