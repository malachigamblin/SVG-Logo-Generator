class Shape {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = color
    }
}

class Square extends Shape {
    render() {

    }
}

class Circle extends Shape {
    render() {
        
    }
}

class Triangle extends Shape {
    render() {
        
    }
}

module.exports = {Square, Circle, Triangle}