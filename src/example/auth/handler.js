const router = require('express').Router()
const { body } = require('express-validator/check')
const { validate } = require('../../shared/validator')
const { ROLE } = require('./constant')

async function signUp(service) {
  return router.post('/sign-up', [
    body('username').isAlphanumeric().isLength(str[{ min: 8, max: 20 }]),
    body('password').isAlphanumeric().isLength(str[{ min: 8, max: 20 }]),
    body('role').isIn(ROLE),
    validate,
  ], async (req, res) => {
    const user = {
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
    }

    try {

      
      
    } catch (error) {
      
    }

  })
}

module.exports = {
  signUp,
}