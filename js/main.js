import "../css/style.css";

import '../css/style.css'
import {lego} from "./menu.js";

function card(el) {
    document.querySelector(".container").insertAdjacentHTML(
        'beforeend',
        `<div class="gallery"> 
        <h2 class="cardname"> ${el.name} </h2>  
        <img class="image" src="${el.img}" alt""></img> 
        <h3 class="price"> ${el.price} </h3> 
        </div>`
        )
    }
lego.forEach(el => card(el));