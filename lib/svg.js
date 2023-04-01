class SVG {
  constructor() {
    this.shapeElement = "";
    this.textElement = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
  }

  generateText(message, color) {
    if (message.length > 3) {
      throw new Error("Text cannot exceed three characters");
    }
    this.textElement = `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  generateShape(shape) {
    this.shapeElement = shape.render();
  }
}

module.exports = SVG;
