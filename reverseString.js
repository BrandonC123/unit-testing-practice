function reverseString(originalWord) {
    let reversed = "";
    for (let i = originalWord.length - 1; i >= 0; i--) {
        reversed += originalWord.charAt(i);
    }
    return reversed;
}

module.exports = reverseString;
