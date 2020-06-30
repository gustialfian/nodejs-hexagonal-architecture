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

module.exports = {
  setupExpress
}