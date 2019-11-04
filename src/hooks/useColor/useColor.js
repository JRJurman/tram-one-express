import { useGlobalState } from 'tram-one'

const APP_COLOR = 'APP_COLOR'

export default () => {
	const [colorIndex, setColorIndex] = useGlobalState(APP_COLOR, 0)
	const colors = ['#e6ef9f', '#a09fef', '#9fefa1', '#ef9f9f']
	const incrementColor = () => setColorIndex((colorIndex + 1) % colors.length)
	return [colors[colorIndex], incrementColor]
}
