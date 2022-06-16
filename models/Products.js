const sequelize = require('../db')
const { DataTypes } = require('sequelize')
const ProductTypes = require('./ProductTypes')

const Products = sequelize.define('products', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	photo: { type: DataTypes.STRING },
	name: { type: DataTypes.STRING },
	short_desc: { type: DataTypes.STRING(510) },
	item_desc: { type: DataTypes.STRING(510) },
	price: { type: DataTypes.INTEGER },
})
ProductTypes.hasMany(Products)
Products.belongsTo(ProductTypes)

module.exports = Products
