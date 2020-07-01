const { LOGS_EXCHANGE } = require('./constants')

async function index(service) {
  const emit = msg => service.emit(LOGS_EXCHANGE, msg)
  return async (req, res) => {
    try {
      const msg = 'kucing woiiii'

      // tidak perlu di await karena publist message itu async
      emit(msg)

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