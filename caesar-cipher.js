function caesarCipher(string, key) {
    const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
     "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let encrpytedString = "";
    for (let i = 0; i < string.length; i++) {
        let index;
        let convertedValue;
        let activeArray;

        if (string.charAt(i).toUpperCase() === string.charAt(i)) {
            index = alphabetUpper.indexOf(string.charAt(i))
            activeArray = alphabetUpper
        } else {
            index = alphabetLower.indexOf(string.charAt(i))
            activeArray = alphabetLower
        }
        
        if (index < 0) {
            convertedValue = string.charAt(i)
        } else {
            convertedValue = convertChar(activeArray, index, key)
        }
        
        encrpytedString += convertedValue;
    }
    return encrpytedString;
}

function convertChar( alphabet, index, key) {
    let convertedValue;
        index = (index + key) % 26;
        convertedValue = alphabet[index]
    return convertedValue;
}

module.exports = caesarCipher;
