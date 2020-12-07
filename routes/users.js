const express = require('express')
const router = express.Router()
const UserController = require('../app/controllers/UserController')

const createUserValidator = require('../app/middleware/validators/user/createUserValidator')

/* GET users listing. */
router.get('/get_users', UserController.findAll)
/* GET a user. */
router.get('/get_user', UserController.findOne)

/* CREATE user. */
router.post('/create_user', createUserValidator, UserController.create)

module.exports = router