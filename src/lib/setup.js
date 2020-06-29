const { Pool } = require('pg')

async function setupDB(dbConfig) {
  console.log(`dbConfig: `, dbConfig)
  const pool = new Pool({
    host: 'localhost',
    port: 6543,
    user: 'sandbox',
    database: 'sandbox',
    password: 'sandbox',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
  })
  return pool
}

module.exports = {
  setupDB,
}