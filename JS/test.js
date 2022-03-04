'use strict'


// let scoreTable = document.getElementById('score-table');

// Array for questions for the test
let testQuestions = []; //dont forget to clear this between tests
let score = 0;
let allScores = [];
let namesArray = [];

// local Storage for score//
let retrievedScore = localStorage.getItem('score');//pull//
let parsedScore = JSON.parse(retrievedScore);//parse//

// local Storage for name//
let retrievedName = localStorage.getItem('nameVariable');
let parsedName = JSON.parse(retrievedName);


//checks local storage to see if it needs to be loaded
if (retrievedScore){
  allScores = parsedScore;
}
if (retrievedName){
  namesArray = parsedName;
}

console.log(namesArray)

let createH1 = document.getElementById('newH1')

let inputValue = document.getElementById('myInput');
let myUser = document.getElementById('userName');

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

let j = 0;
let y = 0;
function renderQuestion() {
  //resets the radio buttons upon rendering new questions
  let unSelectRadio = document.getElementsByName("question1");
  for(var i = 0; i < unSelectRadio.length ; i++){
    unSelectRadio[i].checked = false;
  }


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
}

//event that collects name from user
function handleClick(event){
  event.preventDefault();
  let string = inputValue.value;
  namesArray.push(string);
  console.log(namesArray);
  // let localName = JSON.stringify(namesArray);
  // localStorage.setItem('nameVariable', localName);

  myUser.parentElement.removeChild(myUser);
  
  let nameHeader = document.createElement('h1');
  createH1.appendChild(nameHeader);
  nameHeader.textContent = `Good Luck ${namesArray[namesArray.length - 1]}`;
}

//event that checks if selected radio button is on the correct answer
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
  if (j === 5) {
    testForm.removeEventListener('submit', handleSubmit);
    //Local Storage//
    
    allScores.push(score);
    console.log(allScores);

    let localScore = JSON.stringify(allScores);
    localStorage.setItem('score', localScore);

    let localName = JSON.stringify(namesArray);
    localStorage.setItem('nameVariable', localName);

    window.location.href = "results.html";

    
  } else {
    renderQuestion();
  }
  // let localName = JSON.stringify(nameVariable);
  // localStorage.setItem('nameVariable', localName);
 }

renderQuestion();

myUser.addEventListener('submit', handleClick);

testForm.addEventListener('submit', handleSubmit);
