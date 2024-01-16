
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


document.getElementById("theme").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
  }
  else {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
  }
});



function clear(){
  const clear = document.querySelector(".container");
  clear.innerHTML = ""
};

document.getElementById("reset").addEventListener("click", function() {
  clear();
  createCard(fish);
});


const ok = {
  marine: fish.filter((fishy) => fishy.type.includes("marine")).map((fish) => fish),
  betta: fish.filter((fishy) => fishy.type.includes("betta")).map((fish) => fish),
  cichlid: fish.filter((fishy) => fishy.type.includes("cichlid")).map((fish) => fish),
  goldfish: fish.filter((fishy) => fishy.type.includes("goldfish")).map((fish) => fish),
};
console.log(ok);
const type = {
  marine: "Marine & Freshwater",
  betta: "Betta",
  cichlid: "Cichlid",
  goldfish: "Goldfish",
};

let button = DOMSelectors.buttons;

function filter() {
  button.forEach((btn) => btn.addEventListener("click", function () {
    let oop = btn.id;
    clear();

    if (oop.includes("marine")) {
      createCard(fish.filter((fishy) => fishy.type.includes(type.marine)));
    }
    if (oop.includes("betta")) {
      createCard(fish.filter((fishy) => fishy.type.includes(type.betta)));
    }
    if (oop.includes("cichlid")) {
      createCard(fish.filter((fishy) => fishy.type.includes(type.cichlid)));
    }
    if (oop.includes("goldfish")) {
      createCard(fish.filter((fishy) => fishy.type.includes(type.goldfish)));
    }
  }));
}

filter();
createCard(fish);

// MR WHALEN SAID NOT TO COPY HIM 
// let buttons = document.querySelectorAll("#marine, #betta, #cichlid, #goldfish, #koi")
// buttons.forEach((filterbtn) => filterbtn.addEventListener("click", function(){
//   let category = filterbtn.textContent;
//   let newArr = fish.filter((fish)=> fish.type.includes(category));
//   clear();
//   createCard(newArr);
// }));