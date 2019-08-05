import ColorHeader from './ColorHeader';

const mockColor = 1
const mockUpdateColor = jest.fn()

// mock and spy on tram-one hooks
jest.mock('tram-one', () => ({
  ...(jest.requireActual('tram-one')),
  useState: () => [mockColor, mockUpdateColor]
}));

describe('ColorHeader', () => {
  it('should match snapshot', () => {
    const header = ColorHeader();
    expect(header.outerHTML).toMatchSnapshot();
  });

  it('should call mockSetColor on click', () => {
    const header = ColorHeader();
    header.click()
    expect(mockUpdateColor).toHaveBeenCalled()
  });
});
