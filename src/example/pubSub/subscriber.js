const { LOGS_EXCHANGE } = require('./constants')

async function testSubscriber(service) {
  service.subscribe(LOGS_EXCHANGE, (err, msg) => {
    console.log(`testSubscriber called`)
    if (msg.content) {
      console.log("msg", msg.content.toString());
    }
  })
}

module.exports = {
  testSubscriber,
}