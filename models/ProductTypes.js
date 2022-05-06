const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const ProductTypes = sequelize.define(
	'productTypes',
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		name: { type: DataTypes.STRING },
	},
	{ timestamps: false }
)

module.exports = ProductTypes
