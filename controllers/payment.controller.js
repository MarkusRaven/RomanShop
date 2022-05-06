const PaymentService = require('../services/payment.service')

class PaymentController {
	async pay(req, res) {
		try {
			const payment = await PaymentService.pay(req.user.id, req.body.id)
			res.json(payment)
		} catch (e) {
			res.status(400).send({
				message: 'Error when payment',
				error: e.message,
			})
		}
	}
	async paymentCapture(req, res) {
		try {
			const capture = await PaymentService.capture(req.params.paymentId)
			res.json(capture)
		} catch (e) {
			res.status(400).send({
				message: 'Error when capture',
				error: e.message,
			})
		}
	}
}
module.exports = new PaymentController()
