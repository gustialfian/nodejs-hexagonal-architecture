const { Pool } = require('pg')
const postgres = require('postgres')
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
    throw error
  }
}

async function setupPostgres() {
  try {
    const sql = postgres(dbConfig.connString, {
      max             : 10,         // Max number of connections
      idle_timeout    : 0,          // Idle connection timeout in seconds
      connect_timeout : 30,         // Connect timeout in seconds
    }) // will default to the same as psql

    const result = await sql`select now()`
    console.log(`db up`)

    return sql
  } catch (error) {
    throw error
  }
}

module.exports = {
  setupDB,
  setupPostgres,
}