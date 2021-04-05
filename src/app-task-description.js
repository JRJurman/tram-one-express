import { registerHtml, useUrlParams } from 'tram-one'
import useTaskList from './use-task-list'

/**
 * Simple component that reads path parameters from the url using the useUrlParams hook.
 * Read more about it here: https://tram-one.io/#use-url-params
 */

const html = registerHtml()

const defaultDescription = {
	label: 'Thank you for trying Tram-One',
	description: 'Click on any of the items above to learn more!'
}

export default () => {
	const tasks = useTaskList()

	// pull the task id from the url (if there is one, otherwise use the default description)
	const urlParams = useUrlParams('/:selectedTask')
	const selectedTask = tasks.find(task => task.id === urlParams.selectedTask) || defaultDescription

	// render the label and description of the task
	return html`
		<div class="app-task-description">
			<h2>${selectedTask.label}</h2>
			${selectedTask.description}
		</div>
	`
}
