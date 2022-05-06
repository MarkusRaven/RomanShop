const TokenService = require('../services/token.service')

module.exports = function (req, res, next) {
	try {
		const authorizationHeader = req.headers.authorization
		if (!authorizationHeader) {
			return res
				.status(401)
				.send({ message: 'Unauthorized Error: !authorizationHeader' })
		}

		const accessToken = authorizationHeader.split(' ')[1]
		if (!accessToken) {
			return res
				.status(401)
				.send({ message: 'Unauthorized Error: !accessToken' })
		}
		const userData = TokenService.validateAccessToken(accessToken)
		if (!userData) {
			return res.status(401).send({
				message: 'Unauthorized Error: cant validateAccessToken',
			})
		}
		req.user = userData
		next()
	} catch (e) {
		res.status(401).send({
			message: 'Unauthorized Error',
			error: e.message,
		})
	}
}
