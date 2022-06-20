const capitalize = require("./capitalize");

test("converts first letter of word to uppercase", () => {
    expect(capitalize("test")).toMatch("Test");
});
