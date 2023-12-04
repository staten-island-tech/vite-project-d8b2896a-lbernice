
import '../css/style.css';
import {fish} from "./fish.js";
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


DOMSelectors.dark.addEventListener("click", function() {
    document.body.classList.add("dark")
    document.body.classList.remove("light")
  });

DOMSelectors.light.addEventListener("click", function() {
    document.body.classList.add("light")
    document.body.classList.remove("dark")
});

// function filter(){
//   DOMSelectors.buttons.forEach((filterbtn) => filterbtn.addEventListener("click", function(){
//     let category = filterbtn.textContent.toLowerCase()
//     let newArr = fish.filter((el) => el.type.includes(category))
//     DOMSelectors.output.innerHTML = ""
//     createCard(newArr);
//   }))
// };

let buttons = document.querySelectorAll("#marine, #betta, #cichlid, #goldfish, #koi")
buttons.forEach((filterbtn) => filterbtn.addEventListener("click", function(){
  let category = filterbtn.textContent;
  let newArr = fish.filter((fish)=> fish.type.includes(category));
  clear();
  createCard(newArr);
}));

function clear(){
  const clear = document.querySelector(".container");
  clear.innerHTML = ""
};

document.getElementById("reset").addEventListener("click", function() {
  clear();
  createCard(fish);
});

// DOMSelectors.buttons.addEventListener("click", function(){
//   clear();
//   createCard(fish);
// });

// DOMSelectors.reset.addEventListener("click", function(event){
//   event.preventDefault()
//   clear();
//   createCard(fish);
// })
