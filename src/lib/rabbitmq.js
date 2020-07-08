const amqp = require('amqplib')
const { broker: brokerConfig } = require('./config')

async function setupBroker() {
  try {
    const connection = await amqp.connect(brokerConfig.connString)
    console.log(`broker up`)
    return connection
  } catch (error) {
    throw error
  }
}

module.exports = {
  setupBroker,
}