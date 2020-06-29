const express = require('express')
const { logTrafic } = require('./middleware')

function setupExpress() {
  const app = express();

  app.use(logTrafic)

  return app
}

module.exports = {
  setupExpress
}