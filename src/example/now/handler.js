
async function now({ sql }) {
  return async (req, res) => {
    try {
      const result = await sql`select now()`
      const data = result[0].now
  
      return res.json({
        svc: 'now',
        data,
      })
    } catch (error) {
      console.log({
        svc: 'now',
        status: 'ERROR',
        error,
      })
      return {
        svc: 'now',
        status: 'ERROR',
      }
    }
  }
}

module.exports = {
  now,
}