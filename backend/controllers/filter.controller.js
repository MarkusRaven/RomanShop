const FilterService = require('../services/filter.service')

class FilterController {
	async getFilters(req, res) {
		try {
			const filter = await FilterService.getFilters()
			return res.json(filter)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get filters',
				error: e.message,
			})
		}
	}

	async addFilter(req, res) {
		try {
			const filter = await FilterService.addFilter(req.body.name)
			return res.json(filter)
		} catch (e) {
			res.status(400).send({
				message: 'Error when add filter',
				error: e.message,
			})
		}
	}
}

module.exports = new FilterController()
