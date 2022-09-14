import React from 'react'
import { styles } from './styles'

const Container = ({ children }) => (
	<div style={styles.container}>
		{children}
	</div>
)

export default Container
