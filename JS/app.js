'use strict'

let createLi = document.getElementById('card-elem');
let globalVar = allCards;
// Term.prototype.render = function(){
// console.log(this.term);

for(let i = 0; i < allCards.length; i++){
    let newLi = document.createElement('li');
    let defLi = document.createElement('li');
    newLi.textContent = allCards[i].term;
    defLi.textContent = allCards[i].definition;
    createLi.appendChild(newLi);
    createLi.appendChild(defLi);
  }
// }
