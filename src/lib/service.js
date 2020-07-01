const { setupDB } = require('./postgresql')
const { setupBroker } = require('./rabbitmq')

class Service {
  constructor() {
    console.log(`Constructing Service...`)

    // async dependencies
    this.db = null
    this._broker = null
  }

  async setupDB() {
    try {
      this.db = await setupDB()
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
  
      console.log("testSubscriber listeningg", q.queue)
  
      await channel.consume(q.queue, function (msg) {
        cb(msg)
      }, {
        noAck: true
      });
  
    } catch (error) {
      console.log(`error`, error)
  
    }
  }
}

module.exports = {
  Service,
}