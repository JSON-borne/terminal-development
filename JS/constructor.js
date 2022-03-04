'use strict'

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

//Passing arguments into the constructor

new Term ('For loop', 'This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'What is a for loop?', ['This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'This is an object factory that passes in data and creates an instance of the desired object','A Boolean is a statement that returns only a TRUE or FALSE result' ]);

new Term ('While loop', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'What is a while loop?', ['This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'This is an object factory that passes in data and creates an instance of the desired object', 'A Boolean is a statement that returns only a TRUE or FALSE result' ]);

new Term ('Boolean', 'A Boolean is a statement that returns only a TRUE or FALSE result','What is a Boolean?', ['This method adds items to the end of an array', 'This is a function that is used in conjuction with an object', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property', 'A Boolean is a statement that returns only a TRUE or FALSE result']);

new Term ('Object', 'This is a group of variables and functions that create a model', 'What is an Object?', ['This is a group of variables and functions that create a model', 'This method adds items to the end of an array', 'This is a function that is used in conjuction with an object', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property']);

new Term ('Constructor', 'This is an object factory that passes in data and creates an instance of the desired object', 'What is a constructor?', ['This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'This is an object factory that passes in data and creates an instance of the desired object', 'This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string' ]);

new Term ('Method','This is a function that is used in conjuction with an object', 'What is a Method?', ['This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'This is an object factory that passes in data and creates an instance of the desired object', 'This is a function that is used in conjuction with an object' ]);

new Term ('.push', 'This method adds items to the end of an array','What is the .push Method?', ['This method adds items to the end of an array', 'This kind of loop iterates through items in an array\, and is used to run the same code many times. These loops consist of 3 optional expressions: initialization, condition, and increment followed by a code block', 'This kind of loop iterates through the elements of an array, as long as a certain crtieria evaluates as true. Once the criteria evaluates as false, the loop breaks', 'This is an object factory that passes in data and creates an instance of the desired object']); 

new Term ('.shift', 'This method removes items from the beginning of an array', 'What is the .shift Method?', ['The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'This method adds items to the end of an array', 'This is a function that is used in conjuction with an object', 'This method removes items from the beginning of an array', 'What is the .shift Method?']);

new Term ('.pop', 'This method removes items from the end of an array', 'What is the .pop Method?', ['This method removes items to the end of an array', 'This is a function that is used in conjuction with an object', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property', 'The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs']);

new Term ('.unshift', 'This method adds items to the beginning of an array', 'What is the .unshift Method?', ['This method adds items to the end of an array', 'This is a function that is used in conjuction with an object', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property', 'This method adds items to the beginning of an array']);

new Term ('Bracket Notation', 'This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string', 'What is Bracket Notation?', ['This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string', 'This is an object factory that passes in data and creates an instance of the desired object', 'The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'This is a collection of items stored under a single variable that can be accessed by functions within JavaScript']);

new Term ('DOM', 'The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'What is the DOM?', ['This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string', 'This is an object factory that passes in data and creates an instance of the desired object', 'The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'This is a collection of items stored under a single variable that can be accessed by functions within JavaScript']);

new Term ('Array', 'This is a collection of items stored under a single variable that can be accessed by functions within JavaScript', 'What is an Array?', ['This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string', 'This is an object factory that passes in data and creates an instance of the desired object', 'The Document Object Model, is a programming interface for web documents. It represents an HTML document that can be manipulated by JavaScript and other programs', 'This is a collection of items stored under a single variable that can be accessed by functions within JavaScript']);

new Term ('Local Storage','This is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'What is Local Storage?', ['This type of notation is a way to access a property of an object which uses square brackets. With this type of notation the property name can be a string', 'This is an object factory that passes in data and creates an instance of the desired object', 'This is a property that allows JavaScript to save key-value pairs in a web browser between sessions.', 'This is a collection of items stored under a single variable that can be accessed by functions within JavaScript']);

new Term ('Key/Value Pair', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property', 'What is a Key/Value Pair?', ['This method adds items to the end of an array', 'This is a function that is used in conjuction with an object', 'This is a property of an object where the key is the name of the property, and the value is the information contained within the property', 'This method adds items to the beginning of an array']);



