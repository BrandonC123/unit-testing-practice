function analyzeArray(array) {
    array.sort()
    let average = 0;
    array.forEach((item) => {
        average += item;
    })
    average /= array.length
    return {
        average: average,
        min: array[0],
        max: array[array.length - 1],
        length: array.length,
    }
}

module.exports = analyzeArray