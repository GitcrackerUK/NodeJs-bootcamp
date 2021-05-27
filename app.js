const greet1 = require('./greet1')
const greet2 = require('./greet2').greet
const greet3 = require('./greet3')
const greet3b = require('./greet3')

greet1()
greet2()
greet3.greet()
greet3.greeting = 'Change greeting to Hello !!'
greet3b.greet()
greet3.greet()