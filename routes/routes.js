module.exports = function (app) {
	app.use('/', require('./auth.routes'))
	app.use('/filter', require('./filter.routes'))
	app.use('/product', require('./product.routes'))
	app.use('/cart', require('./cart.routes'))
	app.use('/order', require('./order.routes'))
	app.use('/payment', require('./payment.routes'))
}
