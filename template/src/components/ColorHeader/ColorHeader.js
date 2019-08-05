import { registerHtml, useState } from "tram-one"
import "./ColorHeader.scss"
const html = registerHtml()

export default () => {
  const colors = ["#e6ef9f", "#a09fef", "#9fefa1", "#ef9f9f"]
  const [colorIndex, setColorIndex] = useState(0)

  const updateOnTitleClick = event => {
    setColorIndex((colorIndex + 1) % colors.length)
  }

  return html`
    <h1
      class="color-header"
      style="color:${colors[colorIndex]}"
      onclick=${updateOnTitleClick}
    >
      %TITLE%
    </h1>
  `
}
