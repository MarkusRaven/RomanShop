require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 5000
const sequelize = require('./db')

app.use('/admin', require('./routes/admin.routes'))
app.use(express.static('static'))

async function start() {
	try {
		await sequelize.authenticate()
		await sequelize.sync()

		app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}`)
		})
	} catch (e) {
		console.log('Server error ', e.message)
		process.exit(1)
	}
}

start()
