const { Router } = require('express')
const OrderController = require('../controllers/order.controller')
const auth = require('../middlewares/auth-middleware')
const router = Router()

router.get('/', auth, OrderController.getOrders)

router.post('/add', auth, OrderController.addOrder)

module.exports = router
