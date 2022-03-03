'use strict'
// let indexWindow = document.getElementById('card-elem');

let allCards = [];
let allQuestions = [];
//Golbal array for all answers needed?//

function Term(term, definition, question, answers){
  //cards
  this.term = term;
  this.definition = definition;
  //test
  this.question = question;
  this.answers = answers;

  allCards.push(this);

}

new Term ('For loop', 'A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'What is a for loop?', ['A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'A Constructor is an object factory that passes in data and creates an instance of the desired object','A Boolean is a statement that returns only a TRUR or FALSE result' ]);

new Term ('While loop', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'What is a while loop?', ['A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'A Boolean is a statement that returns only a TRUR or FALSE result' ]);

new Term ('Boolean', 'A Boolean is a statement that returns only a TRUR or FALSE result','What is a Boolean?', ['The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'A Boolean is a statement that returns only a TRUR or FALSE result']);

new Term ('Object', 'An Object is a group of variables  and functions that create a model', 'What is an Object?', ['An Object is a group of variables  and functions that create a model', 'The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property']);

new Term ('Constructor', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'What is a constructor?', ['A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string' ]);

new Term ('Method','A Method is a function that is used in conjuction with an object', 'What is a Method?', ['A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'A Method is a function that is used in conjuction with an object' ]);

new Term ('.push', 'The .push Method removes item from the end of an array','What is the .push Method?', ['The .push Method removes item from the end of an array', 'A For Loop iterates through items in an array\, and is used to run the same code many times. For loops consist of 3 optional expressions :initialization, condition, finalExpression followed by a code block', 'A While Loop is a loop that iterates through the elements of the array, while a certain crtieria evealuates as true. Once the criteria evaluates as false, the loop breaks', 'A Constructor is an object factory that passes in data and creates an instance of the desired object']); 

new Term ('.shift', 'The .shift Method removes items from the beginning of an array', 'What is the .shift Method?', ['The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'The .shift Method removes items from the beginning of an array', 'What is the .shift Method?']);

new Term ('.push', 'The .push Method adds items to the end of an array', 'What is the .push Method?', ['The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs']);

new Term ('.unshift', 'The .unshift method adds items to the beginning of an array', 'What is the .unshift Method?', ['The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'The .unshift method adds items to the beginning of an array']);

new Term ('Bracket Notation', 'Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'What is Bracket Notation?', ['Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?']);

new Term ('DOM', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'What is the DOM?', ['Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?']);

new Term ('Array', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?', 'What is an Array?', ['Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'The DOM, or Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?']);

new Term ('Local Storage','Local is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'What is Local Storage?', ['Bracket Notation is a way to access a property of an object which uses square brackets. With Bracket Notation the property name can be a string', 'A Constructor is an object factory that passes in data and creates an instance of the desired object', 'Local is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'An Array is a collection of items stored under a single variable that can be accessed by functions within JavaScript?']);

new Term ('Key/Value Pair', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'What is a key Value Pair?', ['The .push Method removes item from the end of an array', 'A Method is a function that is used in conjuction with an object', 'A Key/Value Pair is a property of an object where the Key is the name of the property, and the value is the information contained within the property', 'The .unshift method adds items to the beginning of an array']);


console.log(allCards);
