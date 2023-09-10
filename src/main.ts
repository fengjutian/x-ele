import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import View from './View.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  ${new View().init()}
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
