const router = require('express').Router()
const repo = require('./repository')

async function handler(service) {
  router.get('/', async (req, res) => {
    const data = await repo.find(service.sql)

    return res.json(data)
  })

  router.get('/:id', async (req, res) => {
    const id = req.params.id

    const data = await repo.findById(service.sql, id)

    if (!data.length) {
      return res.json('data not found')
    }

    return res.json(data)
  })

  router.post('/', async (req, res) => {
    const newTodo = {
      name: req.body.name,
      status: req.body.status,
    }
    const data = await repo.insert(service.sql, newTodo)

    return res.json(data)
  })

  router.put('/:id', async (req, res) => {
    const id = req.params.id
    const newTodo = {
      name: req.body.name,
      status: req.body.status,
    }

    const data = await repo.update(service.sql, id, newTodo)

    return res.json(data)
  })

  router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const data = await repo.destroy(service.sql, id)

    return res.json(data)
  })

  return router
}

module.exports = {
  handler,
}