const express = require('express')
const router = express.Router()
const UserController = require('../app/controllers/UserController')

// middlewares
const validateUser = require('../app/middlewares/validators/user/validateUser')

/**
 *  Main routes 
 * **/

/* CREATE user. */
router.post('/create', validateUser, UserController.create)
/* LOGIN user. */
router.post('/login', UserController.login)
/* GET users listing. */
router.get('/fetch', UserController.findAll)
/* GET a user. */
router.get('/get', UserController.findOne)

module.exports = router
