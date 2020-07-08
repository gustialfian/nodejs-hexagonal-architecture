require('dotenv').config()

const app = require('./app.js')

app.start()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })