const express = require('express');
const router = express.Router();

// Handlers
const usersRouter = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const routers = [
  {
    path: '/',
    handler: router
  },
  {
    path: '/user',
    handler: usersRouter
  },
]

module.exports = routers;
