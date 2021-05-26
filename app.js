const greet = require('./greet')
const square = require('./square')

const squareResult = square.square(2);
const squareFeetResult = square.squareFeet(2)
const squareClass = square.squareClass
const resultClass = new squareClass(2)

console.log(resultClass.runAndDisplay())


console.log(squareResult)
console.log(squareFeetResult)

