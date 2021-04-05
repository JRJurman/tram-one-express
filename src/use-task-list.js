import { registerHtml, useGlobalStore } from 'tram-one'
const html = registerHtml()

/**
 * Wrapper around useGlobalStore with a hard-coded key.
 * By wrapping this hook, we ensure that there is always a value available (in this case tasks).
 * Also, we know that any use of the hook will use the correct key, 'TASK_LIST'.
 */

/* hard-coded task list that's used as the default value for useGlobalStore */
const tasks = [
	{
		id: 'generate-project',
		label: 'Generate Project',
		completed: true,
		description: html`
			<p>
				You generated a project! Good job! You're one step closer to a shiny new web-app!
			</p>
		`
	},

	{
		id: 'read-docs',
		label: 'Read the Docs',
		completed: false,
		link: '',
		description: html`
			<p>
				<a href="https://tram-one.io">
					Read up on the Features, concepts, and API for Tram-One!
				</a>
			</p>
		`,
	},

	{
		id: 'join-discord',
		label: 'Join the Discord',
		completed: false,
		description: html`
			<p>
				<a href="https://discord.gg/dpBXAQC">
					Join the Discord server to keep up to date with Tram-One, ask questions, and join an awesome community!
				</a>
			</p>
		`
	},

	{
		id: 'build-project',
		label: 'Build something Great',
		completed: false,
		description: html`
			<p>
				What are you waiting for? You've got everything you need to make something awesome!
			</p>
		`
	}
]

/**
 * Hook to get the array of tasks in the project.
 * This hook is global, and can be used / mutated anywhere to update the state in the entire app.
 */
export default () => {
	return useGlobalStore('TASK_LIST', tasks)
}
