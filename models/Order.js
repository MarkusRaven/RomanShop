const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const OrderStatus = require('./OrderStatus')

const Order = sequelize.define('order', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	price: { type: DataTypes.FLOAT },
	full_name: { type: DataTypes.STRING },
	obtain: { type: DataTypes.STRING },
	tel: { type: DataTypes.STRING },
	address: { type: DataTypes.JSON },
	cart: { type: DataTypes.ARRAY(DataTypes.JSON) },
})

OrderStatus.hasMany(Order)
Order.belongsTo(OrderStatus)

module.exports = Order
