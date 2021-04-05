import { registerHtml } from 'tram-one'
import AppListItem from './app-task-item'
import useTaskList from './use-task-list'

/**
 * Simple component that imports and "registers" a component to use.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'app-list-item': AppListItem
})

export default () => {
	const taskList = useTaskList()

	const taskListItems = taskList.map(
		task => html`
			<app-list-item task-id=${task.id} />
		`
	)
	return html`
		<div class="app-task-list">
			${taskListItems}
		</div>
	`
}
