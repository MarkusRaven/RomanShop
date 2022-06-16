const AdminJS = require('adminjs')

const properties = {
	createdAt: {
		isVisible: {
			list: false,
			filter: false,
			show: true,
			edit: false,
		},
	},
	updatedAt: {
		isVisible: {
			list: false,
			filter: false,
			show: true,
			edit: false,
		},
	},
	photo: {
		isVisible: {
			list: false,
			filter: false,
			show: true,
			edit: false,
		},
	},
	uploadImage: {
		isVisible: {
			list: false,
			filter: false,
			show: false,
			edit: true,
		},
		components: {
			edit: AdminJS.bundle('./components/upload-image.jsx'),
		},
	},
}
module.exports = properties
