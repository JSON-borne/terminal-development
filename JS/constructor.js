'use strict'
// let indexWindow = document.getElementById('card-elem');

let allCards = [];
let allQuestions = [];
//Golbal array for all answers needed?//

function Term(term, definition, question, wrongAnswers){
  //cards
  this.term = term;
  this.definition = definition;
  //test
  this.question = question;
  this.wrongAnswers = wrongAnswers;

  allCards.push(this);

}

new Term ('For loop', 'A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'What is a for loop?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);

new Term ('While loop', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'What is a while loop?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);

new Term ('Boolean', 'A Boolean is a statement that returns only a TRUR or FALSE result','What is a Boolean?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Object', 'An Object is a group of variables  and functions that create a model', 'What is an Object?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Constructor', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'What is a constructor?');
new Term ('Method','A Method is a function that is used in conjuction with an object', 'What is a Method?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('.push', 'The .push Method removes item from the end of an array','What is the .push Method?'); 
new Term ('.shift', 'The .shift Method removes items from the beginning of an array', 'What is the .shift Method?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('.push', 'The .push Method adds items to the end of an array', 'What is the .push Method?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('.unshift', 'The .unshift method adds items to the beginning of an array', 'What is the .unshift Method?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Bracket Notation', 'Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'What is Bracket Notation?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('DOM', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'What is the DOM?' , ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Array', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?', 'What is an Array?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Local Storage','Local is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'What is Local Storage?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);
new Term ('Key/Value Pair', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'What is a key Value Pair?', ['wrong answer 1', 'wrong answer 2', 'wrong answer 3']);

console.log(allCards);
