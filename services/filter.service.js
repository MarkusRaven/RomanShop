const ProductTypes = require('../models/ProductTypes')

class FilterService {
	async getFilters() {
		const filters = await ProductTypes.findAll()
		return filters
	}
	async addFilter(name) {
		const filter = await ProductTypes.create({
			name,
		})
		return filter
	}
}
module.exports = new FilterService()
