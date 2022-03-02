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
 
  firstDef.textContent = allCards[rand1].definition;
  secondTerm.textContent = allCards[rand2].term;
  secondDef.textContent = allCards[rand2].definition;
  thirdTerm.textContent = allCards[rand3].term;
  thirdDef.textContent = allCards[rand3].definition;
}

function handleClick(event) {

  renderCards();
}
// button listener on html
button.addEventListener('click', handleClick);

renderCards();

///////////////////test page

// let testForm = document.getElementById('test-form');

// let quizQ = document.getElementById('question');
// let quizCorrectAnswer = document.getElementById('allCards.definition');
// let wrongAOne = document.getElementById(allCards.wrongAnswers[0]);
// let wrongATwo = document.getElementById(allCards.wrongAnswers[1]);
// let wrongAThree = document.getElementById(allCards.wrongAnswers[2]);

// quizQ.textContent = document.getElementById(allCards[0].question[0]);
// console.log(allCards[0]);
// quizQ.textContent = allCards[0].question;
// console.log(allCards);






// button.addEventListener('click', handleClick);