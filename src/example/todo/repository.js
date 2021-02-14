
async function find(sql) {
  return await sql`select * from todo`
}

async function findById(sql, id) {
  return await sql`select * from todo where id = ${id}`
}

async function insert(sql, data) {
  return await sql`insert into todo 
      ${sql(data, 'name', 'status')}
      returning *`
}

async function update(sql, id, data) {
  return await sql`update todo set 
      ${sql(data, 'name', 'status')} 
      where id = ${id}
      returning *`
}

async function destroy(sql, id) {
  return await sql`delete from todo where id = ${id} returning *`

}

module.exports = {
  find,
  findById,
  insert,
  update,
  destroy,
}