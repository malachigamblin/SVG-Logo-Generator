const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Square, Circle, Triangle, Rectangle } = require("./shapes");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "shapeChoice",
          type: "list",
          message: "Please select a shape for your logo",
          choices: ["square", "circle", "triangle", "rectangle"],
        },
        {
          name: "colorChoice",
          type: "input",
          message: "What color would you like your shape to be?",
        },
        {
          name: "textChoice",
          type: "input",
          message:
            "Please enter the text for your logo. (Text cannot exceed three characters)",
          validate: (textChoice) =>
            textChoice.length <= 3 || "Text cannot exceed three characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "What color would you like your text to be?",
        },
      ])
      .then(({ shapeChoice, colorChoice, textChoice, textColor }) => {
        let shape;
        switch (shapeChoice) {
          case "square":
            shape = new Square();
            break;

          case "circle":
            shape = new Circle();
            break;

          case "triangle":
            shape = new Triangle();
            break;

          case "rectangle":
            shape = new Rectangle();
            break;
        }
        shape.setColor(colorChoice);

        const svg = new SVG();
        svg.generateText(textChoice, textColor);
        svg.generateShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("your new logo has been generated!");
      })
      .catch((error) => {
        console.log("looks like there was an issue...");
        console.log(error);
      });
  }
}

module.exports = CLI;
