require('dotenv').config()
const express = require('express')
const app = express()
const pid = process.pid
const cors = require('cors')
const PORT = 5000
const sequelize = require('./db')

app.use(express.json({ extended: true }))
app.use(cors({ credentials: true, origin: '*' }))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('static'))
app.use('/admin', require('./routes/admin.routes'))

async function start() {
	try {
		await sequelize.authenticate()
		await sequelize.sync({ alter: true })
		const server = app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT}. Pid: ${pid}`)
		})
		process.on('SIGINT', () => {
			console.log('Signal is SIGINT')
			server.close(() => {
				process.exit(0)
			})
		})

		process.on('SIGTERM', () => {
			console.log('Signal is SIGTERM')
			server.close(() => {
				process.exit(0)
			})
		})

		process.on('SIGUSR2', () => {
			console.log('Signal is SIGUSR2')
			server.close(() => {
				process.exit(1)
			})
		})
	} catch (e) {
		console.log('Server error ', e.message)
		process.exit(1)
	}
}

start()
