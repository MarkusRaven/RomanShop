require('dotenv').config()
const jwt = require('jsonwebtoken')
const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET

class TokenService {
	async generateAccessToken(data) {
		const accessToken = await jwt.sign(data, JWT_ACCESS_SECRET, {
			expiresIn: '30d',
		})
		return accessToken
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, JWT_ACCESS_SECRET)
			return userData
		} catch (e) {
			return null
		}
	}
}

module.exports = new TokenService()
