class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Rectangle extends Shape {
  render() {
    return `<rect x="90" y="40" width="180" height="100" fill="${this.color}" />`;
  }
}

module.exports = { Square, Circle, Triangle, Rectangle };
