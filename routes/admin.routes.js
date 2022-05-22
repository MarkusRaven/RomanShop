const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSSequelize = require('@adminjs/sequelize')
const options = require('../admin/admin-options')

AdminJS.registerAdapter(AdminJSSequelize)

const adminJs = new AdminJS(options)
const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router
