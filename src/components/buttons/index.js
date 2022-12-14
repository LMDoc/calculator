import React, { useMemo } from 'react'
import Button from './button'
import { styles } from './styles'

const Buttons = ({ clickEvents: { updateCalculation, functionalEvents } }) => {
	const buttonValues = useMemo(() => ([
		{
			display: 'CE',
			value: 'CE',
			cb: functionalEvents
		},
		{
			display: 'C',
			value: 'C',
			cb: functionalEvents
		},
		{
			display: 'DEL',
			value: 'DEL',
			cb: functionalEvents,
		},
		{
			display: '/',
			value: '/',
			cb: updateCalculation
		},
		{
			display: '1',
			value: '1',
			cb: updateCalculation
		},
		{
			display: '2',
			value: '2',
			cb: updateCalculation
		},
		{
			display: '3',
			value: '3',
			cb: updateCalculation
		},
		{
			display: '+',
			value: '+',
			cb: updateCalculation
		},
		{
			display: '4',
			value: '4',
			cb: updateCalculation
		},
		{
			display: '5',
			value: '5',
			cb: updateCalculation
		},
		{
			display: '6',
			value: '6',
			cb: updateCalculation
		},
		{
			display: '-',
			value: '-',
			cb: updateCalculation
		},
		{
			display: '7',
			value: '7',
			cb: updateCalculation
		},
		{
			display: '8',
			value: '8',
			cb: updateCalculation
		},
		{
			display: '9',
			value: '9',
			cb: updateCalculation
		},
		{
			display: 'x',
			value: '*',
			cb: updateCalculation
		},
		{
			display: '.',
			value: '.',
			cb: updateCalculation,
		},
		{
			display: '0',
			value: '0',
			cb: updateCalculation
		},
		{
			display: '',
			value: '',
			cb: () => { }
		},
		{
			display: '=',
			value: '=',
			cb: functionalEvents,
		}
	]), [functionalEvents, updateCalculation])

	return (
		<div style={styles.buttons}>
			{buttonValues.map(({ display, value, cb }, i) => (
				<Button
					value={value}
					onClick={cb}
					display={display}
					key={`${value}${i}`}
				/>
			))}
		</div>
	)
}

export default Buttons
