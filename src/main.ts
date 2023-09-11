import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import View from './View.ts'
import Text from './widgets/Text.ts'
import Div from './widgets/Div.ts'

const divWidget =  new Div("我是div").render()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${ divWidget }
  ${
    new Text('Hello World').style({
      style: {
        color: "red"
      },
      class: []
    }).event({
      onClick: () => { console.log('click')}
    }).render()
  }
  ${
    new Text('Hello World').style({
      style: {
        color: "red"
      },
      class: []
    }).event({
      onClick: () => { console.log('click')}
    }).render()
  }

  ${
    new Text('Hello World').render()
  }
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
