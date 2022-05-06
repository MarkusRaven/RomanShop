const Order = require('../models/Order')
const { getSixRandomNumbers, getRandomNumbers } =
	require('../functions/randomCode')()
const { YooCheckout } = require('@a2seven/yoo-checkout')
const shopId = '855355'
const secretKey = 'test_AWlVjKFQjAOaetv9ymz5EOlz72ePEWY_0qFg4GN3gQw'
const currency = 'RUB'

class PaymentService {
	async pay(userId, id) {
		let idempotenceKey = getRandomNumbers()
		const order = await Order.findOne({
			where: { id, userId, orderStatusId: 1 },
		})
		const value = order.price
		const checkout = new YooCheckout({
			shopId,
			secretKey,
		})
		const createPayload = {
			amount: {
				value,
				currency,
			},
			description: 'Оплата заказа № ' + getSixRandomNumbers(),

			payment_method_data: {
				type: 'bank_card',
			},
			confirmation: {
				type: 'redirect',
				return_url: '/',
			},
			metadata: { id: order.id },
		}
		const payment = await checkout.createPayment(
			createPayload,
			idempotenceKey
		)
		return payment
	}
	async capture(paymentId) {
		let idempotenceKey = getRandomNumbers()
		const checkout = new YooCheckout({
			shopId,
			secretKey,
		})
		let payment = await checkout.getPayment(paymentId)
		const value = payment.amount.value
		const capturePayload = {
			amount: {
				value,
				currency,
			},
		}
		if (payment.status == 'pending') {
			return 'Повторите попытку оплаты'
		}
		if (payment.status == 'waiting_for_capture') {
			const capturePayment = await checkout.capturePayment(
				paymentId,
				capturePayload,
				idempotenceKey
			)
			payment = await checkout.getPayment(paymentId)
			if (payment.status == 'succeeded') {
				await Order.update(
					{ orderStatusId: 2 },
					{ where: { id: payment.metadata.id } }
				)
				return capturePayment
			} else {
				await Order.update(
					{ orderStatusId: 5 },
					{ where: { id: payment.metadata.id } }
				)
				return 'Sorry, try again'
			}
		}
	}
}

module.exports = new PaymentService()
