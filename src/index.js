import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect } from 'tram-one'
import AppHeader from './app-header'
import AppSummary from './app-summary'
import appTaskDescription from './app-task-description'
import AppTaskList from './app-task-list'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'app-header': AppHeader,
	'app-summary': AppSummary,
	'app-task-list': AppTaskList,
	'app-task-description': appTaskDescription,
})

const home = () => {
	useEffect(() => {
		console.log('Thanks for using Tram-One!')
	})
	return html`
		<main>
			<app-header>tram-one-example checklist</app-header>
			<app-summary />
			<app-task-list />
			<hr />
			<app-task-description />
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
