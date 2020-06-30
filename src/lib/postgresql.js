const { Pool } = require('pg')
const { db: dbConfig } = require('./config')

async function setupDB() {
  try {
    const pool = new Pool({
      connectionString: dbConfig.connString,
      max: 50,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 2000,
    })

    await pool.query('select now()')
    console.log(`db up`)

    return pool

  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  setupDB,
}