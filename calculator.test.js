const calculator = require("./calculator");
// const subtract = require("./calculator");
// const divide = require("./calculator");
// const multiply = require("./calculator");

test("adds two numbers together", () => {
    expect(calculator.add(1, 2)).toEqual(3);
});

test("subtract two numbers together", () => {
    expect(calculator.subtract(1, 2)).toEqual(-1);
});

test("divide two numbers together", () => {
    expect(calculator.divide(1, 2)).toEqual(.5);
});

test("multiply two numbers together", () => {
    expect(calculator.multiply(1, 2)).toEqual(2);
});
