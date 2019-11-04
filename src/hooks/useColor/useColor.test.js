import useColor from './useColor'

describe('Color', () => {
	it('should return default color', () => {
		const [color] = useColor()
		expect(color).toEqual('#e6ef9f')
	})

	it('should change value on incrementColor', () => {
		const [, incrementColor] = useColor()
		incrementColor()
		const [color] = useColor()
		expect(color).toEqual('#a09fef')
	})
})
