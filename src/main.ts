import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import View from './View.ts'
import Text from './elements/Text.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${
    new Text().init('Hello World').style({
      style: {
        color: "red"
      },
      class: []
    }).event({
      onClick: () => { console.log('click')}
    }).render()
  }
  ${
    new Text().init('Hello World').style({
      style: {
        color: "red"
      },
      class: []
    }).event({
      onClick: () => { console.log('click')}
    }).render()
  }
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
