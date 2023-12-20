function reverse(string) {
    if (!string.length) {
        return null;
    }
    let reversed = '';
    for (let i = string.length; i > 0; i--) {
        reversed += string[i - 1];
    }
    return reversed;
}
module.exports = reverse;