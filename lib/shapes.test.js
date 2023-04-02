const { Square, Circle, Triangle, Rectangle } = require("./shapes");

describe("Test to make sure Square renders correctly", () => {
  it("shape rendered should be a sqaure, and should be yellow", () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(
      '<rect x="90" y="40" width="120" height="120" fill="yellow" />'
    );
  });
});

describe("Test to make sure Circle renders correctly", () => {
  it("shape rendered should be a circle, and should be black", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="black" />'
    );
  });
});

describe("Test to make sure Triangle renders correctly", () => {
  it("shape rendered should be a triangle, and should be orange", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
    );
  });
});

describe("Test to make sure Rectangle renders correctly", () => {
  it("shape rendered should be a rectangle, and should be grey", () => {
    const shape = new Rectangle();
    shape.setColor("grey");
    expect(shape.render()).toEqual(
      '<rect x="90" y="40" width="180" height="100" fill="grey" />'
    );
  });
});
