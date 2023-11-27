import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

import '../css/style.css'
import {fish} from "./fish.js";
import { DOMSelectors } from './dom.js';

function card(el) {
    document.querySelector(".container").insertAdjacentHTML('beforeend',
        `<div class="gallery"> 
        <h2 class="cardname"> ${el.name} </h2>  
        <img class="image" src="${el.img}" alt""></img> 
        <h3 class="price"> ${el.price} </h3> 
        </div>`
        )
    }
fish.forEach(el => card(el));