require('dotenv').config()
const jwt = require('jsonwebtoken')
const AuthService = require('../services/auth.service')
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET
const { validationResult } = require('express-validator')

class AuthController {
	async register(req, res) {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.json({
					message: `Ошибка при валидации`,
					errors: errors.array(),
				})
			}
			const { email, password } = req.body
			const userData = await AuthService.register({ email, password })
			return res.json(userData)
		} catch (e) {
			res.status(400).send({
				message: 'Error when register',
				error: e.message,
			})
		}
	}

	async login(req, res) {
		try {
			const { email, password } = req.body
			const userData = await AuthService.login({ email, password })

			return res.json(userData)
		} catch (e) {
			res.status(400).send({
				message: 'Error when login',
				error: e.message,
			})
		}
	}
}

module.exports = new AuthController()
