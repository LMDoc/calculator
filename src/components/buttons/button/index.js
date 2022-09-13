import React from 'react'
import { styles } from './styles'

const Button = ({ value, onClick }) => (
		<button 
			style={styles}
			value={value}
			onClick={onClick}
		>
			{value}
		</button>
	)

export default Button