const Order = require('../models/Order')
const Product = require('../models/Products')
const Cart = require('../models/Cart')

class OrderService {
	async getOrders(userId) {
		const orders = await Order.findAll({ where: { userId } })
		return orders
	}
	async addOrder(userId, address, tel, full_name, obtain, price) {
		const cart = await Cart.findAll({
			where: { userId },
			include: [{ model: Product, attributes: ['name', 'photo'] }],
		})
		const order = await Order.create({
			userId,
			address,
			tel,
			full_name,
			obtain,
			price,
			cart,
			orderStatusId: 1,
		})
		await Cart.destroy({ where: { userId }, truncate: true })
		return order
	}
}
module.exports = new OrderService()
