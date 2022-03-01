'use strict'

let createLi = document.getElementById('card-elem');
let globalVar = allCards;
// Term.prototype.render = function(){
// console.log(this.term);



function getRandomIndex() {///Random number generator
  return Math.floor(Math.random() * allCards.length)
}


let shownCards = [];//holds shown cards

function renderCards() {
  if (shownCards.length > 6){
    delete shownCards[6];
    delete shownCards[7];
    delete shownCards[8];
  }

  while (shownCards.length < 6) {//as long as //set this to 6 numbers also
    let randomnums = getRandomIndex();
    while (!shownCards.includes(randomnums)) { //if the number is not present '!' 
      shownCards.unshift(randomnums);
    }
  
  }
    
  console.log(shownCards);

  for(let i = 0; i < 3; i++){
    let newLi = document.createElement('li');
    let defLi = document.createElement('li');
    newLi.textContent = allCards[shownCards[i]].term;
    defLi.textContent = allCards[shownCards[i]].definition;
    createLi.appendChild(newLi);
    createLi.appendChild(defLi);

  }
}

renderCards();
