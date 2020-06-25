const express = require('express')
const router = express.Router()
const user = require('../controllers/user')

router.post('/login', user.login)
router.post('/register', user.register)
router.get('/get', user.getUserByEmail)
router.get('/', user.getUsers)

module.exports = router