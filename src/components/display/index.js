import React from 'react'
import { styles } from './styles'

const Display = ({ calculation, result, list }) => (
	<div style={styles.container}>
		<div style={{ ...styles.previous, ...styles.input }}>
			{list.map(i => (
				<div style={styles.list}>
					<p>
						{i.calculation} <br />
						= {i.result}
					</p>
				</div>
			))}
		</div>
		<div style={{ ...styles.current, ...styles.input }}>{calculation || 0}</div>
		<div style={{ ...styles.total, ...styles.input }}>= {result || 0}</div>

	</div>
)

export default Display
