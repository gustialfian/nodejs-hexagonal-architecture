const { testSubscriber } = require('./example/pubSub/subscriber')

async function registerSubscriber(service) {
  await testSubscriber(service)
}

module.exports = {
  registerSubscriber,
}