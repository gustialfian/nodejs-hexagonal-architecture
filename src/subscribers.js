const { testSubscriber } = require('./example/pubSub/subscriber')

async function registerSubscriber(service) {
  try {
    await testSubscriber(service)
  } catch (error) {
    console.log(`lakdsjfa;skdjlfa;dkslfja;lkdj`)
    throw error
  }
}

module.exports = {
  registerSubscriber,
}