const amqp = require('amqplib')
const { broker: brokerConfig } = require('./config')

async function setupBroker() {
  try {
    const connection = await amqp.connect(brokerConfig.connString)
  
    console.log(`broker up`)
  
    return connection
    
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  setupBroker,
}