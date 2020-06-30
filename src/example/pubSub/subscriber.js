const { LOGS_EXCHANGE } = require('./constants')

async function testSubscriber(service) {
  const connection = service._broker
  try {
    const channel = await connection.createChannel()

    await channel.assertExchange(LOGS_EXCHANGE, 'fanout', { durable: false })
    const q = await channel.assertQueue('', { exclusive: true })

    channel.bindQueue(q.queue, LOGS_EXCHANGE, '')

    console.log("testSubscriber listeningg", q.queue)

    await channel.consume(q.queue, function (msg) {
      if (msg.content) {
        console.log("testSubscriber called", msg.content.toString());
      }
    }, {
      noAck: true
    });

  } catch (error) {
    console.log(`error`, error)

  }
}

module.exports = {
  testSubscriber,
}