const Cart = require('../models/Cart')
const Product = require('../models/Products')

class CartService {
	async getCart(userId) {
		const cart = await Cart.findAll({
			where: { userId },
			include: [{ model: Product, attributes: ['name', 'photo'] }],
		})
		let endedPrice = 0
		let cartCount = 0
		for (let i = 0; i < cart.length; i++) {
			endedPrice += cart[i].price
			cartCount += cart[i].count
		}
		return { cart, endedPrice, cartCount }
	}
	async add(userId, count, productId, price) {
		const cart = await Cart.create({
			userId,
			count,
			productId,
			price,
		})
		const updatedCart = await Cart.findOne({
			where: { id: cart.id },
			include: [{ model: Product, attributes: ['name', 'photo'] }],
		})
		return updatedCart
	}

	async remove(userId, id) {
		await Cart.destroy({ where: { id } })
		const cart = await Cart.findAll({
			where: { userId },
			order: [['createdAt', 'DESC']],
			include: [{ model: Product, attributes: ['name', 'photo'] }],
		})
		let endedPrice = 0
		let cartCount = 0
		for (let i = 0; i < cart.length; i++) {
			endedPrice += cart[i].price
			cartCount += cart[i].count
		}
		return { cart, cartCount, endedPrice }
	}
}
module.exports = new CartService()
