const User = require('../models/User')
const TokenService = require('./token.service')
const UserDto = require('../dtos/user-dto')
const bcrypt = require('bcrypt')

class AuthSevice {
	async register(data) {
		const candidate = await User.findOne({ where: { email: data.email } })
		if (candidate) {
			return `Пользователь с таким ${data.email} уже существует`
		}
		const hashPassword = await bcrypt.hash(data.password, 3)
		await User.create({
			email: data.email,
			password: hashPassword,
		})
		const user = await User.findOne({ where: { email: data.email } })
		const userDto = new UserDto(user.dataValues)
		const token = await TokenService.generateAccessToken({
			...userDto,
		})

		return { token, user: userDto }
	}
	async login(data) {
		const user = await User.findOne({ where: { email: data.email } })
		if (!user) {
			return `Пользователя с таким ${data.email} не существует`
		}
		const isPassEquals = await bcrypt.compare(data.password, user.password)
		if (!isPassEquals) {
			return `Введён неверный логин или пароль`
		}
		const userDto = new UserDto(user.dataValues)
		const token = await TokenService.generateAccessToken({
			...userDto,
		})
		return { token, user: userDto }
	}
}
module.exports = new AuthSevice()
