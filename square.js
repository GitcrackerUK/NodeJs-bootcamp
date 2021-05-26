const square = (width) => {
    return width * width;
};

const squareFeet = (width) => {
    const sqCentimeters = width * width;
    const sqFeet = sqCentimeters * 0.001076391041671;
    return sqFeet;
};

class squareClass {
    constructor(width) {
        this.width = width;
        this.square = square;
        this.squareFeet = squareFeet;
    }

    squareFunc() {
        this.width *= this.width; 
        return
    }
    squareFeetFunc() {
        this.squareFeet = this.square * 0.001076391041671; 
        return
    }

    runAndDisplay() {
        this.squareFunc();
        this.squareFeetFunc();
        console.log(`Square from ${this.width} is ${this.square} and ${this.squareFeet}feet`);
    }
}
module.exports = {
    square: square,
    squareFeet: squareFeet,
    squareClass:squareClass
};