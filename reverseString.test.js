const reverseString = require("./reverseString")

test("reverses a string", () => {
    expect(reverseString("brandon")).toMatch("nodnarb");
});
