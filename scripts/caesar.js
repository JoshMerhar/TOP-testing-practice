function caesarCipher(string, key) {
    if (key > 26) {
        key %= 26;
    }
    let codedString = '';
    for (let i = 0; i < string.length; i++) {
        let letter = string.charCodeAt(i);
        let newLetter;
        if (isUpperCase(string[i])) {
            letter += key;
            if (letter > 90) {
                letter -= 26;
            }
            newLetter = String.fromCharCode(letter);
            codedString += newLetter;
        } else if (isLowerCase(string[i])) {
            letter += key;
            if (letter > 122) {
                letter -= 26;
            }
            newLetter = String.fromCharCode(letter);
            codedString += newLetter;
        } else {
            codedString += string[i];
        }
    }
    return codedString;
}

function isUpperCase(char) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
        return true;
    }
}

function isLowerCase(char) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) {
        return true;
    }
}
module.exports = caesarCipher;