const express = require('express')
const router = express.Router()
const db = require('../app/models')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await db.user.findAll()
    res.send({ users })
  } catch (error) {
    res.send({ error })
  }
})

/* CREATE user. */
router.post('/', async (req, res, next) => {
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

module.exports = router
