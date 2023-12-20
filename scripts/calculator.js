const calculator = (() => {
    const add = (a, b) => {
        return a + b;
    }

    return { add }
})();
module.exports = calculator;