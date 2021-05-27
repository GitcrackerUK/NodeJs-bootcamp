function Greeter() {
    this.greeting = 'Hello world!!  from greet 4';
    this.greet = function () {
        console.log(this.greeting);
    };
}
module.exports = Greeter