function Emitter() {
    this.events ={}
}

Emitter.prototype.on = function (type, listener) {
    this.event[type] = this.event[type] || [];
    this.events[type].push(listener);
};

// Emitter.prototype.on = function (type, listener) {
//     this.events[type] = this.events[type] || [];
//     this.events[type].push(listener);
// };

// Emitter.prototype.on = function (type,listener) {
//     this.events[type] = this.events[type] || []
//     this.events[type].push(listener)
// }

module.export = {
    clg: console.log('-------------------------emitter-------------------------'),
    Emitter:Emitter
};