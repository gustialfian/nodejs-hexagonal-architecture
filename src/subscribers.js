const { testSubscriber } = require('./example/pubSub/subscriber')

async function registerSubscriber(service) {
  try {
    await testSubscriber(service)
  } catch (error) {
    throw error
  }
}

module.exports = {
  registerSubscriber,
}