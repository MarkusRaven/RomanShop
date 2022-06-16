const bcrypt = require('bcrypt')

const before = async (request) => {
	if (request.payload.password) {
		request.payload = {
			...request.payload,
			password: await bcrypt.hash(request.payload.password, 10),
		}
	}
	return request
}

module.exports = { before }
