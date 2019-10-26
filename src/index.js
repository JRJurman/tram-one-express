import 'core-js/stable'
import 'regenerator-runtime/runtime'
import {registerHtml, start} from 'tram-one'
import ColorHeader from './components/ColorHeader'
import './styles.css'

const html = registerHtml({
	ColorHeader
})

const home = () => {
	return html`
    <div>
      <ColorHeader />
      Thank you for using Tram-One!
    </div>
  `
}

start('#app', home)
