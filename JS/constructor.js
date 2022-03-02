'use strict'
// let indexWindow = document.getElementById('card-elem');

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
new Term ('For loop', 'A For Loop iterates through items in an array, and is used to run the same code many times.', 'What is a for loop?');

new Term ('While loop', 'A While Loop is a loop that iterates through the elements of the array as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop ends', 'What is a while loop?');

new Term ('Boolean', 'A Boolean is a statement that returns a TRUE or FALSE result','What is a Boolean?');
new Term ('Object', 'An Object is a group of variables  and functions that create a model', 'What is an Object?');
new Term ('Constructor', 'A Constructor is a special method that is used to create and initialize objects', 'What is a constructor?');
new Term ('Method','A Method is a function that is used in conjuction with an object', 'What is a Method?');
new Term ('The Push Method', 'The Push Method adds items to an array using .push','What is the Push Method?'); 
new Term ('The Shift Method', 'The Shift Method removes items from the beginning of an array using .shift', 'What is the Shift Method?');
new Term ('The Pop Method', 'The Pop Method removes items from the end of an array using .pop', 'What is the .push Method?');
new Term ('The Unshift Method', 'The Unshift method adds items to the beginning of an array using .unshift', 'What is the Unshift Method?');
new Term ('Bracket Notation', 'Bracket Notation is a way to access a property of an object which uses square brackets. With bracket notation the property name can be a string', 'What is Bracket Notation?');
new Term ('DOM', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'What is the DOM?' );
new Term ('Array', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript', 'What is an Array?');
new Term ('Local Storage','Local Storage is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'What is Local Storage?');
new Term ('Key/Value Pair', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'What is a key Value Pair?');

console.log(allCards);
