'use strict'

console.log(allCards);

// Array for questions for the test
let testQuestions = []; //dont forget to clear this between tests
let score = 0;

let testForm = document.getElementById('test-form');
let quizQ = document.getElementById('question');
let answer1 = document.getElementById('aOne');
let answer2 = document.getElementById('aTwo');
let answer3 = document.getElementById('aThree');
let answer4 = document.getElementById('aFour');

function getRandomIndex() {///Random number generator
  return Math.floor(Math.random() * allCards.length)
}

//randomly selects Terms out of our constructor
while (testQuestions.length < 5) {
  let numIndex = getRandomIndex();
  while (!testQuestions.includes(numIndex)) { //make sure we dont get duplicates
    testQuestions.push(numIndex);
  }
}

//start of the function that will generate new questions after clicking submit
console.log(testQuestions);

let j = 0;

function renderQuestion() {
  quizQ.textContent = allCards[testQuestions[j]].question;
  answer1.textContent = allCards[testQuestions[j]].answers[0];
  document.getElementById('answerOne').setAttribute('value', allCards[testQuestions[j]].answers[0]);
  answer2.textContent = allCards[testQuestions[j]].answers[1];
  document.getElementById('answerTwo').setAttribute('value', allCards[testQuestions[j]].answers[1]);
  answer3.textContent = allCards[testQuestions[j]].answers[2];
  document.getElementById('answerThree').setAttribute('value', allCards[testQuestions[j]].answers[2]);
  answer4.textContent = allCards[testQuestions[j]].answers[3];
  document.getElementById('answerFour').setAttribute('value', allCards[testQuestions[j]].answers[3]);
  j++;



  if (j === 5) {
    testForm.removeEventListener('submit', handleSubmit);

  }

}



function handleSubmit(event) {
  event.preventDefault();


  let answerSelected = event.target.question1.value;
  console.dir(answerSelected);
  for (let i = 0; i < testQuestions.length; i++) {

    if (answerSelected === allCards[testQuestions[i]].definition) {

      score++;


    }
    
  }
  console.log(score);
  renderQuestion();




};
renderQuestion();

testForm.addEventListener('submit', handleSubmit);
