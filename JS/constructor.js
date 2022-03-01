'use strict'
let indexWindow = document.getElementById('card-elem');

let allCards = [];
let allQuestions = [];
//Golbal array for all answers needed?//


function Term(term, definition, question){
  //cards
  this.term = term;
  this.definition = definition;
  //test
  this.question = question;
  this.wrongAnswers = [];

  allCards.push(this);

}
new Term ('For loop', 'definition is this', 'What is a beard loop?');
new Term ('While loop', 'What does a WhileLoop do?', 'Iterates through the elements of the array, until it meets crtieria');
new Term ('boolean', 'What is a Boolean?', 'Is True or False statement only');
new Term ('Object', 'What is an Object?', 'Objects group together a set of variables  and functions to create a model');
new Term ('constructor', 'What is a constructor?', 'It\'s an object factory that passes in data and automatically creates our instance');

console.log(allCards);




 




