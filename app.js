const greet1 = require('./greet1')
const greet2 = require('./greet2').greet
const greet3 = require('./greet3')
const greet3b = require('./greet3')
const greet4 = require('./greet4')
const greet5 = require('./greet5')

greet1()
greet2()
greet3.greet()
greet3.greeting = 'Change greeting to Hello !!'
greet3b.greet()
greet3.greet()

const objectGreet4 = new greet4();
objectGreet4.greet()

greet5.greet()