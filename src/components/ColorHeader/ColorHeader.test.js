import ColorHeader from './ColorHeader'

const mockColor = '#e6ef9f'
const mockUpdateColor = jest.fn()

// mock and spy on tram-one hooks
jest.mock('../../hooks/useColor', () => ({
	__esModule: true, // this property makes it work
	default: () => {
		return [mockColor, mockUpdateColor]
	}
}))

describe('ColorHeader', () => {
	it('should match snapshot', () => {
		const header = ColorHeader()
		expect(header.outerHTML).toMatchSnapshot()
	})

	it('should call mockSetColor on click', () => {
		const header = ColorHeader()
		header.click()
		expect(mockUpdateColor).toHaveBeenCalled()
	})
})
