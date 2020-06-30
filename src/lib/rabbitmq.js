const amqp = require('amqplib')
const { broker: brokerConfig } = require('./config')

async function setupBroker() {
  const connection = await amqp.connect(brokerConfig.connString)

  console.log(`broker up`)

  return connection
}

module.exports = {
  setupBroker,
}