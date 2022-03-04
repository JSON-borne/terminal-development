'use strict'

// let createLi = document.getElementById('card-elem');

//Ref to the HTML for randomly chosen cards
let firstTerm = document.getElementById('term1');
let firstDef = document.getElementById('def1');

let secondTerm = document.getElementById('term2');
let secondDef = document.getElementById('def2');

let thirdTerm = document.getElementById('term3');
let thirdDef = document.getElementById('def3');

//creating button for refreshing cards
let button = document.getElementById('button');

//random number generator
function getRandomIndex() {///Random number generator
  return Math.floor(Math.random() * allCards.length)
}


let shownCards = [];//holds shown cards
function renderCards() { //function to choose randome cards to be displayed on index

  while (shownCards.length < 9) {//as long as //set this to 6 numbers also
    
    let randomnums = getRandomIndex();
    while (!shownCards.includes(randomnums)) { //if the number is not present '!' 
      shownCards.unshift(randomnums);
    }
  }
    
  console.log(shownCards);

  let rand1 = shownCards.pop();
  let rand2 = shownCards.pop();
  let rand3 = shownCards.pop();
 
  //DOM push to the window for cards
  firstTerm.textContent = allCards[rand1].term;
  firstDef.textContent = allCards[rand1].definition;
  secondTerm.textContent = allCards[rand2].term;
  secondDef.textContent = allCards[rand2].definition;
  thirdTerm.textContent = allCards[rand3].term;
  thirdDef.textContent = allCards[rand3].definition;
}

// Function for the click that will refresh out cards
function handleClick(event) {
  renderCards();
}
// button listener on html
// button.addEventListener('click', handleClick);

renderCards();
