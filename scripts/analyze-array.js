const analyzeArray = (() => {
    const average = (array) => {
        let total = 0;
        array.forEach(number => {
            total += number;
        });
        return total / array.length;
    };

    const min = (array) => {
        let min = array[0];
        array.forEach(number => {
            if (number < min) {
                min = number;
            }
        });
        return min;
    };

    const max = (array) => {
        let max = array[0];
        array.forEach(number => {
            if (number > max) {
                max = number;
            }
        });
        return max;
    };

    const length = (array) => {
        return array.length;
    };

    return { average, min, max, length };
})();
module.exports = analyzeArray;