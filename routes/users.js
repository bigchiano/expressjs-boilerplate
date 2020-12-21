const express = require('express')
const router = express.Router()
const UserController = require('../app/controllers/UserController')

const validateUser = require('../app/middlewares/validators/user/validateUser')

/* GET users listing. */
router.get('/get_users', UserController.findAll)
/* GET a user. */
router.get('/get_user', UserController.findOne)

/* CREATE user. */
router.post('/create_user', validateUser, UserController.create)
/* LOGIN user. */
router.post('/login', UserController.login)

module.exports = router
