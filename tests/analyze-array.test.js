const analyzeArray = require('../scripts/analyze-array');

test('Return average of items in array', () => {
    expect(analyzeArray.average([1,2,3])).toBe(2);
});

test('Return min number of 1 from array', () => {
    expect(analyzeArray.min([2,1,3])).toBe(1);
});

test('Return max number of 8 from array', () => {
    expect(analyzeArray.max([4,8,2])).toBe(8);
});

test('Return length of 3 from array', () => {
    expect(analyzeArray.length([1,2,3])).toBe(3);
});