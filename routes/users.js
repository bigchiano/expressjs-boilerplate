const express = require('express')
const { default: UserController } = require('../app/controllers/UserController')
const router = express.Router()

/* GET users listing. */
router.get('/', UserController.getAll)

/* CREATE user. */
router.post('/', UserController.create)

module.exports = router