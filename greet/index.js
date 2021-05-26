// const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(1337, '127.0.0.1', () => {
//     console.log('Server runs on port 127.0.0.1');
// });

// function statement
// function greet() {
//      console.log("hello")
//  }

// function logGreet(func) {
//      func()
// }

// function add() {
//     console.log(2+2)
// }

// logGreet(greet)
// logGreet(add)

// logGreet(function () {
//     console.log('hello Pawel')
// })

// logGreet(() => {
//     console.log('arrow functions')
// })

// function pass(func) {
//     return func()
// }
// function Person(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// const John = new Person('John', 'Smith');
// const Jane  = new Person('Jane','Jones')
// console.log(John.firstname, John.lastname)

// Person.prototype.greet = function () {
//     console.log(`Hello ${this.firstname} ${this.lastname}`)
// }
// John.greet()
// console.log(John.__proto__)
// console.log(Jane.__proto__)

// console.log(Jane.__proto__ === John.__proto__);

// //pass by value 

// function change(b) {
//     b=2
// }
// let a = 1

// change(a)
// console.log(a)
// // by reference 

// let obj = {

// }


// function changeObj(d) {
//     d.prop1 = {
//         name:'hello'
//     }
//     d.prop2 = function () {
//        console.log( this.prop1)
//     }
// }

// changeObj(obj)

// obj.prop2()
// console.log(obj)

// const func =  function() {
    
// }

// console.log('John'.toUpperCase());


// (function (lastname) {
//     let firstname = 'John'     // scope 
//     console.log(firstname, lastname)  //
//     console.log(lastname)
// }('Doe'));
// // to envoke function we  need add braces

// const func = require('./greet');


const greetEN = require('./english');
const greetPL = require('./polish');

module.exports = {
    english: greetEN,
    polish: greetPL
};




