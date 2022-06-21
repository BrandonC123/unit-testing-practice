const caesarCipher = require("./caesar-cipher")

test("incorrect caesar cipher", () => {
    expect(caesarCipher("Attack, aT dawn", 5)).toBe("Fyyfhp, fY ifbs")
})

test("incorrect caesar cipher", () => {
    expect(caesarCipher("take them down", 17)).toBe("krbv kyvd ufne")
})