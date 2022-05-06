const OrderService = require('../services/order.service')

class OrderController {
	async getOrders(req, res) {
		try {
			const orders = await OrderService.getOrders(req.user.id)
			return res.json(orders)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get orders',
				error: e.message,
			})
		}
	}

	async addOrder(req, res) {
		try {
			const { address, tel, full_name, obtain, price } = req.body
			const order = await OrderService.addOrder(
				req.user.id,
				address,
				tel,
				full_name,
				obtain,
				price
			)
			return res.json(order)
		} catch (e) {
			res.status(400).send({
				message: 'Error when add order',
				error: e.message,
			})
		}
	}
}

module.exports = new OrderController()
