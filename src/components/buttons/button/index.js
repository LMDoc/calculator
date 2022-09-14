import React from 'react'
import { styles } from './styles'

const Button = ({ display, value, onClick }) => (
	<button
		style={styles}
		value={value}
		onClick={onClick}
	>
		{display}
	</button>
)

export default Button