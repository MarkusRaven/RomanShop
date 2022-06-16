import React from 'react'
import { Box, Label, DropZone } from '@adminjs/design-system'

const Edit = ({ property, onChange }) => {
	const handledDropZoneChange = (files) => {
		onChange(property.name, files[0])
	}
	return (
		<Box>
			<Label>
				{property.label}
				<DropZone onChange={handledDropZoneChange} />
			</Label>
		</Box>
	)
}

export default Edit
