import { useCallback, useEffect, useState } from "react"

export const useCalculator = () => {
	const [calculation, setCalculation] = useState('')
	const [result, setResult] = useState('')
	const [list, setList] = useState([])

	console.log(list, calculation, result)

	const updateList = useCallback((result, calculation) => {
		const newItem = {
			calculation: calculation,
			result: result,
		}
		const newList = [...list, newItem]
		setList(newList)
	}, [list])

	const calculate = useCallback(() => {
		if (!calculation) return
		const result = eval(calculation).toString()
		setResult(result)
		updateList(result, calculation)
	}, [calculation, updateList])

	const clear = useCallback(() => {
		setCalculation('')
		setResult('')
	}, [])

	const functionalEvents = useCallback(({ target: { value } }) => {
		if (value === 'CE') {
			clear()
			setList([])
		}

		if (value === 'C') {
			clear()
		}

		if (value === '=') {
			calculate()
			clear()
		}
	}, [calculate, clear])

	const updateCalculation = ({ target: { value } }) => {
		const operators = ['/', '+', '-', '*', '=']

		if ((operators.includes[value] && calculation === '') ||
			(operators.includes(value) && operators.includes(calculation.slice(-1)))
		) {
			return
		}

		setCalculation(calculation + value)
	}

	return {
		clear,
		calculation,
		result,
		list,
		clickEvents: {
			updateCalculation: updateCalculation,
			functionalEvents: functionalEvents,
		}
	}
}