import { getAllByRole, fireEvent, getByText } from '@testing-library/dom'
import 'regenerator-runtime/runtime'

describe('tram-one-example', () => {
	beforeAll(() => {
		// setup the element for the page to mount on
		const testAppContainer = document.createElement('div')
		testAppContainer.id = 'app'
		document.body.appendChild(testAppContainer)

		// run index.js to start the app on the page
		require('../src/index.js')
	})

	it('should have an app header', () => {
		// verify the page has a header with the app name
		const appHeader = getByText(document, 'tram-one-example checklist')
		expect(appHeader).toBeInTheDocument()
	})

	it('should have a summary section', () => {
		// verify the summary section (above tasks), appears on the page
		const summaryParagraph = getByText(document, 'There are 1 out of 4 tasks completed')
		expect(summaryParagraph).toBeInTheDocument()
	})

	it('should have a task list', () => {
		// verify we have four tasks on the page
		const tasks = getAllByRole(document, 'checkbox')
		expect(tasks.length).toEqual(4)
	})

	it('should have the default description on loading the page', () => {
		// verify that the header for the description area appears on the page
		const descriptionHeader = getByText(document, 'Thank you for trying Tram-One')
		expect(descriptionHeader).toBeInTheDocument()

		// verify the description appears on the page
		const descriptionParagraph = getByText(document, 'Click on any of the items above to learn more!')
		expect(descriptionParagraph).toBeInTheDocument()
	})

	it('should update the summary on checking task list', () => {
		const [generateCheckBox, readDocCheckbox, discordCheckbox, buildCheckbox] = getAllByRole(document, 'checkbox')
		// uncheck the first one, it is checked by default
		fireEvent.click(generateCheckBox)
		const firstSummaryParagraph = getByText(document, /tasks completed/)
		expect(firstSummaryParagraph).toHaveTextContent('There are 0 out of 4 tasks completed')
		// click the first second, and third
		fireEvent.click(generateCheckBox)
		fireEvent.click(readDocCheckbox)
		fireEvent.click(discordCheckbox)
		const secondSummaryParagraph = getByText(document, /tasks completed/)
		expect(secondSummaryParagraph).toHaveTextContent('There are 3 out of 4 tasks completed')

	})

	it('should update the task description on interacting with tasks', () => {
		// select a checkbox to update the description section
		const readDocsLink = getByText(document, 'Read the Docs')
		fireEvent.click(readDocsLink)

		// get the header and paragraph section
		const [, udpatedTaskHeader] = getAllByRole(document, 'heading')
		expect(udpatedTaskHeader).toHaveTextContent('Read the Docs')

		const updatedDescription = getByText(document, 'Read up on the Features, concepts, and API for Tram-One!')
		expect(updatedDescription).toBeInTheDocument()
	})
})
