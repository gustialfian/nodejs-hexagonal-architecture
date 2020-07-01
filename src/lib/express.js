const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

function setupExpress() {
  const app = express();

  // setup global middleware
  app.use(bodyParser.json())
  app.use(cors())
  app.use(morgan('common'))

  return app
}

function listen(server) {
  const httpServer = http.createServer(server)
  httpServer.listen(3000, () => {
    console.log(`Listening on localhost:${3000}`)
  })
}

module.exports = {
  setupExpress,
  listen,
}