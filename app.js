const greet = require('./greet');
const square = require('./square');

//greet
const english = greet.english();
const polish = greet.polish();
console.log(english);
console.log(polish);

//square
const squareResult = square.square(2);
const squareFeetResult = square.squareFeet(2);
const squareClass = square.squareClass; //undefined
const resultClass = new squareClass(2); //undefined
console.log(squareResult);
console.log(squareFeetResult);
