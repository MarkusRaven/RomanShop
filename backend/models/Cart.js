const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const Product = require('./Products')

const Cart = sequelize.define('cart', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	count: { type: DataTypes.INTEGER },
	price: { type: DataTypes.INTEGER },
})

Product.hasMany(Cart)
Cart.belongsTo(Product)

module.exports = Cart
