const http = require('http')

const { setupExpress } = require('./express')
const { setupDB } = require('./postgresql')

class Server {
  constructor() {
    console.log(`Constructing Server...`)
    
    this.router = setupExpress()

    this._db = null
    this._broker = 'rabbitmq'
  }

  listen() {
    const server = http.createServer(this.router)
    server.listen(3000, () => {
      console.log(`Listening on localhost:${3000}`)
    })
  }

  async setupDB() {
    this._db = await setupDB()
  }
}

module.exports = {
  Server,
}