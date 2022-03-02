'use strict'

console.log(allCards);

// Array for questions for the test
let testQuestions = [] //dont forget to clear this between tests

// let testForm = document.getElementById('test-form');
let quizQ = document.getElementById('question');
let answer1 = document.getElementById('aOne');
let answer2 = document.getElementById('aTwo');
let answer3 = document.getElementById('aThree');
let answer4 = document.getElementById('aFour');

function getRandomIndex() {///Random number generator
  return Math.floor(Math.random() * allCards.length)
}

//randomly selects Terms out of our constructor
while(testQuestions.length < 5){
  let numIndex = getRandomIndex();
  while(!testQuestions.includes(numIndex)){ //make sure we dont get duplicates
    testQuestions.push(numIndex);
  }
}

//start of the function that will generate new questions after clicking submit
console.log(testQuestions);
function handleClick(event){
  quizQ.textContent = allCards[testQuestions[i]].question;
  answer1.textContent = allCards[testQuestions[i]].definition;
  answer2.textContent = allCards[testQuestions[i]].wrongAnswers[0];
  answer3.textContent = allCards[testQuestions[i]].wrongAnswers[1];
  answer4.textContent = allCards[testQuestions[i]].wrongAnswers[2];
};
