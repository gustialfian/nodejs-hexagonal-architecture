
async function now(server) {
  const db = server._db

  return async (req, res) => {
    const result = await db.query('select now()')
    const now = result.rows[0].now

    return res.json({
      svc: 'now',
      data: now,
    })
  }
}

module.exports = { 
  now
}