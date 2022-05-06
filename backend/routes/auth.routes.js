const { Router } = require('express')
const AuthController = require('../controllers/auth.controller.js')
const router = Router()
const { body } = require('express-validator')

router.post(
	'/register',
	body('email').isEmail(),
	body('password').isLength({ min: 5, max: 32 }),
	AuthController.register
)

router.post('/login', AuthController.login)

module.exports = router
