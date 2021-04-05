import { registerHtml } from 'tram-one'
import useTaskList from './use-task-list'

/**
 * Simple component that attaches events to HTML
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml()

export default (props) => {
	const tasks = useTaskList()
	const selectedTask = tasks.find(task => task.id === props['task-id'])

	const showDescription = (event) => {
		// don't actually go to the url, we'll do a pushState instead
		event.preventDefault()

		// navigate to the url to show the description of the task (see app-task-description)
		window.history.pushState({}, '', `/${selectedTask.id}`)
	}

	// update the status of the task if it was clicked
	const updateStatus = (event) => {
		const checkStatus = event.target.checked
		selectedTask.completed = checkStatus
	}

	return html`
		<label class="app-task-item" >
			<input type="checkbox" onchange=${updateStatus} ${selectedTask.completed ? 'checked' : ''} />
			<a href="/${selectedTask.id}" onclick=${showDescription}>${selectedTask.label}</a>
		</label>
	`
}
