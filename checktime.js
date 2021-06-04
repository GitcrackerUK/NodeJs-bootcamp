function Time() {
    this.time={}
}

Time.prototype.on = function (event, listener) {
    this.time[event] = this.time[event] || [];
    this.time[event].push(listener);
}

Time.prototype.emit = function (event) {
    if (this.time[event]) {
        this.time[event].map((item) => item());
    }
};

module.exports = Time