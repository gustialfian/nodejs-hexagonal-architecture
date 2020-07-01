const { LOGS_EXCHANGE } = require('./constants')

async function index(service) {
  return async (req, res) => {
    try {
      const msg = 'kucing woiiii'

      await service.publish(LOGS_EXCHANGE, msg)

      return res.json({
        svc: 'pubSub',
        data: `msg: ${msg} emitted`,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = {
  index,
}