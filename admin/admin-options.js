const productsProperties = require('./products/products.properties')
const userProperties = require('./users/users.properties')

const Order = require('../models/Order')
const Products = require('../models/Products')
const ProductTypes = require('../models/ProductTypes')
const User = require('../models/User')

const { before: passwordBeforeHook } = require('./users/actions/password.hook')

const {
	after: uploadAfterHook,
	before: uploadBeforeHook,
} = require('./products/actions/upload-image.hook')

const options = {
	resources: [
		Order,
		ProductTypes,
		{
			resource: User,
			options: {
				properties: userProperties,
				actions: {
					new: {
						before: passwordBeforeHook,
					},
				},
			},
		},
		{
			resource: Products,
			options: {
				properties: productsProperties,
				actions: {
					new: {
						after: async (res, req, context) => {
							return uploadAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadBeforeHook(req, context)
						},
					},
					edit: {
						after: async (res, req, context) => {
							return uploadAfterHook(res, req, context)
						},
						before: async (req, context) => {
							return uploadBeforeHook(req, context)
						},
					},
				},
			},
		},
	],
	branding: {
		companyName: 'Greate Good',
		softwareBrothers: false,
	},
	rootPath: '/admin',
}

module.exports = options
