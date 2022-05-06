const CartService = require('../services/cart.service')

class CartController {
	async getCart(req, res) {
		try {
			const cart = await CartService.getCart(req.user.id)
			return res.json(cart)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get cart',
				error: e.message,
			})
		}
	}

	async add(req, res) {
		try {
			const { count, productId, price } = req.body
			const cart = await CartService.add(
				req.user.id,
				count,
				productId,
				price
			)
			return res.json(cart)
		} catch (e) {
			res.status(400).send({
				message: 'Error when add product to cart',
				error: e.message,
			})
		}
	}

	async remove(req, res) {
		try {
			const user = req.user.id
			const product = req.params.id
			const cart = await CartService.remove(user, product)
			res.json(cart)
		} catch (e) {
			res.status(400).send({
				message: 'Error while deleting product from cart',
				error: e.message,
			})
		}
	}
}

module.exports = new CartController()
