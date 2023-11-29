// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import '../css/style.css';
import { fish } from './fish';
import { DOMSelectors } from './dom';

function createCard(arr){
  arr.forEach((el)=> DOMSelectors.output.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
    <h2 id="name" class="name">${el.name}</h2>
    <img id="${el.name}" src="${el.image}" class="image">
    <h3 id="price" class="name">$${el.price}</h3>
    <div> <button class="button"> Add to cart </button> </div>
    </div>`
  ))
  }
createCard(fish);


DOMSelectors.theme.addEventListener("click", function() {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark")
    document.body.classList.remove("light")
  }
  else {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
  } 
})

function typeFilter(){
  
}

