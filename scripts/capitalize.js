function capitalize(string) {
    if (!string.length) {
        return null;
    }
    const upper = string[0].toUpperCase();
    return upper + string.slice(1);
}
module.exports = capitalize;