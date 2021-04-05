import { registerHtml } from 'tram-one'

/**
 * Simple component that uses children in the rendered tag.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml()

export default (props, children) => {
	return html`
		<h1 class="app-header">
			${children}
		</h1>
	`
}
