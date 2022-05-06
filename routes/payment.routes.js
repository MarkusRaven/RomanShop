const PaymentController = require('../controllers/payment.controller.js')
const auth = require('../middlewares/auth-middleware.js')
const { Router } = require('express')
const router = Router()

// Create payment
router.post('/pay', auth, PaymentController.pay)

// Get history payment
router.get('/capture/:paymentId', auth, PaymentController.paymentCapture)

module.exports = router
