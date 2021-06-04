const emitter = require('./emitter')
const Time = require('./checktime')

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

const emit = new emitter()
emit.on('hello', () => {
    console.log('This is first call from Emitter constructor ')
})
emit.on('hello', () => {
    console.log('Here is another call')
})
emit.emit('hello')
const newTime = new Time

newTime.on('morning', () => {
    console.log('This is still morning!')
})
newTime.on('morning', () => {
    console.log('Time for breakfast')
})


newTime.emit('morning')

newTime.on('afternoon', () => {
    console.log('It is already afternoon!!')
})
newTime.on('evening', () => {
    console.log("It is late, because it is getting dark and it's is evening for sure")
})

newTime.emit('evening')