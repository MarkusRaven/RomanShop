const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Cart = require('./Cart')
const Order = require('./Order')
const Token = require('./Token')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	email: { type: DataTypes.STRING, unique: true, allowNull: false },
	password: { type: DataTypes.STRING, allowNull: false },
	role: { type: DataTypes.STRING, defaultValue: 'user' },
})
User.hasMany(Cart)
Cart.belongsTo(User)

Order.belongsTo(User)
User.hasMany(Order)

User.hasOne(Token)
Token.belongsTo(User)

module.exports = User
