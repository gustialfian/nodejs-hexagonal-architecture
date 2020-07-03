const { setupPostgres } = require('./postgresql')
const { setupBroker } = require('./rabbitmq')

class Service {
  constructor() {
    console.log(`Constructing Service...`)

    // dependencies
    this.sql = null
    this._broker = null
  }

  async setup() {
    try {
      this.sql = await setupPostgres()
      this._broker = await setupBroker()
    } catch (error) {
      throw error
    }
  }

  async publish(exchange, message) {
    try {
      const channel = await this._broker.createChannel()

      channel.assertExchange(exchange, 'fanout', { durable: false })
      channel.publish(exchange, '', Buffer.from(message))

      console.log(`emited on ${exchange}: ${message}`)

    } catch (error) {
      throw error
    }
  }

  async subscribe(exchange, cb) {
    try {
      const channel = await this._broker.createChannel()
  
      await channel.assertExchange(exchange, 'fanout', { durable: false })
      const q = await channel.assertQueue('', { exclusive: true })
  
      channel.bindQueue(q.queue, exchange, '')
  
      await channel.consume(q.queue, function (msg) {
        cb(null, msg)
      }, {
        noAck: true
      });
  
    } catch (error) {
      cb(error, null)
      throw error
    }
  }
}

module.exports = {
  Service,
}