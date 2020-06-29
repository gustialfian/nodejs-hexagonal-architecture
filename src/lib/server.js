const http = require('http')

const { setupExpress } = require('./express')
const { setupDB } = require('./postgresql')
const { logTrafic } = require('./middleware')

class Server {
  constructor() {
    console.log(`Constructing Server...`)
    this._db = setupDB({})
    this._broker = 'rabbitmq'
    this.router = setupExpress()
  }

  async getDB() {
    return await this._db
  }

  listen() {
    // register global middleware
    this.router.use(logTrafic)

    const server = http.createServer(this.router)
    server.listen(3000, () => {
      console.log(`Listening on localhost:${3000}`)
    })
  }
}

module.exports = {
  Server,
}