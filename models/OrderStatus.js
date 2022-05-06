const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const OrderStatus = sequelize.define('orderStatus', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	name: { type: DataTypes.STRING },
})

module.exports = OrderStatus
