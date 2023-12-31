import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import View from './View.ts';


import { Text, Div } from './widgets/index.ts'

const divWidget =  new Div("我是div").render()

let eleComp = ['divWidget']

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${ View.render(eleComp) }
  ${ divWidget }
  ${
    new Text('Hello World').style({
      style: {
        color: "red",
        fontSize: '10px'
      },
      class: ['hello', 'world']
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

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
