import { registerHtml } from 'tram-one'
import useTaskList from './use-task-list'

/**
 * Simple component that reads from useTaskList, a global store.
 * Read more about it here: https://tram-one.io/#observables
 */

const html = registerHtml()

export default () => {
	const tasks = useTaskList()
	const completedTasks = tasks.filter(task => task.completed)
	return html`
		<p class="app-summary">
			There are ${completedTasks.length} out of ${tasks.length} tasks completed
		</p>
	`
}
