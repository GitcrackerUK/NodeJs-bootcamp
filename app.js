const emitter = require('./emitter')
// object methods and properties
const object = {
    greet: 'Hello'
}
console.log(object.greet)
console.log(object['greet'])
const prop = 'greet'
console.log(object[prop])

// functions and arrays 

const arr = []

arr.push(function () {
    console.log('hello world one')
})
arr.push(function () {
    console.log('hello world two')
})
arr.push(function () {
    console.log('hello world three')
})
arr.push(function () {
    console.log('hello world four')
})

console.log(arr)

arr.forEach(item => {
    item()
})

arr.push({ name: 'this is property in the object' })

arr.map(item => {
    if (item.name) {
        console.log(item)
    }
})

emitter.clg
