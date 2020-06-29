const express = require('express')

function setupExpress() {
  const app = express();
  return app
}

module.exports = {
  setupExpress
}