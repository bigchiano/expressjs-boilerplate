const express = require('express')
const router = express.Router()
const db = require('../app/models')

/* GET users listing. */
router.get('/', function (req, res, next) {
  db.sequelize.transaction(async (t) => {
    try {
      const users = await db.user.findAll({ limit: 10 })
      res.send({ users })
    } catch (error) {
      res.send({ error })
    }
  })
})

/* CREATE user. */
router.post('/', function (req, res, next) {
  db.sequelize.transaction(async (t) => {
    try {
      const user = {
        email: 'chris@gmail.com',
        firstName: 'Chris',
        lastName: 'Ochuko',
      }
      await db.user.create(user)
      res.send({ user })
    } catch (error) {
      res.send({ error })
    }
  })
})

module.exports = router
