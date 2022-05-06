const { Router } = require('express')
const ProductController = require('../controllers/product.controller')
const router = Router()

router.get('/', ProductController.getProducts)

router.get('/filter/:productTypeId', ProductController.getProductsWithFilter)

router.post('/add', ProductController.addProduct)

module.exports = router
