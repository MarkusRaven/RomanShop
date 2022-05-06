const ProductService = require('../services/product.service')

class ProductController {
	async getProducts(req, res) {
		try {
			const products = await ProductService.getProducts()
			return res.json(products)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get products',
				error: e.message,
			})
		}
	}

	async getProductsWithFilter(req, res) {
		try {
			const products = await ProductService.getProductsWithFilter(
				req.params.productTypeId
			)
			return res.json(products)
		} catch (e) {
			res.status(400).send({
				message: 'Error when get products with filter',
				error: e.message,
			})
		}
	}

	async addProduct(req, res) {
		try {
			const { name, short_desc, item_desc, price, productTypeId } =
				req.body
			const products = await ProductService.addProduct(
				name,
				short_desc,
				item_desc,
				price,
				{ photo: req.files.photo },
				productTypeId
			)
			return res.json(products)
		} catch (e) {
			res.status(400).send({
				message: 'Error when add product',
				error: e.message,
			})
		}
	}
}

module.exports = new ProductController()
