const calculator = require('../scripts/calculator');

test('Add function adds two values', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Add function handles negative values', () => {
    expect(calculator.add(-5, -5)).toBe(-10);
});