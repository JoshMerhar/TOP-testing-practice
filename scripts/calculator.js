const calculator = (() => {
    const add = (a, b) => {
        return a + b;
    }

    const subtract = (a, b) => {
        return a - b;
    }

    return { add, subtract }
})();
module.exports = calculator;