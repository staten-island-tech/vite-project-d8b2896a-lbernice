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