const { LOGS_EXCHANGE } = require('./constants')

async function testSubscriber(service) {
  service.subscribe(LOGS_EXCHANGE, (msg) => {
    console.log(`testSubscriber called`)
    if (msg.content) {
      console.log("msg", msg.content.toString());
    }
  })
}

module.exports = {
  testSubscriber,
}