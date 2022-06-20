function capitalize(originalWord) {
    return (
        originalWord.substring(0, 1).toUpperCase() +
        originalWord.substring(1, originalWord.length)
    );
}

module.exports = capitalize;
