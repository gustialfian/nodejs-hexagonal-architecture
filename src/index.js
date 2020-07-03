require('dotenv').config()

const app = require('./app.js')

app.start()
  .catch(error => {
    console.log(`hai`)
    console.error(error)
    process.exit(1)
  })