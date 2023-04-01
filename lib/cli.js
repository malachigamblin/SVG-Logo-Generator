const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const SVG = require("./svg");
const { Square, Circle, Triangle, Rectangle } = require("./shapes");

class CLI {
  run() {
    return inquirer.prompt([
      {
        name: "shapeChoice",
        type: "list",
        message: "Please select a shape for your logo",
        choices: ["square", "circle", "triangle"],
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
        name: 'textColor',
        type: 'input',
        message: 'What color would you like your text to be?'
      }
    ])
  }
}
