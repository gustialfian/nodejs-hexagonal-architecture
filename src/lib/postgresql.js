const { Pool } = require('pg')

async function setupDB(configDB) {
  try {
    console.log(`configDB: `, configDB)
  
    const pool = new Pool({
      host: 'localhost',
      port: 6543,
      database: 'sandbox',
      user: 'sandbox',
      password: 'sandbox',
      max: 50,
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