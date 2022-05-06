const { Router } = require('express')
const FilterController = require('../controllers/filter.controller')
const router = Router()

router.get('/', FilterController.getFilters)

router.post('/add', FilterController.addFilter)

module.exports = router
