const calculator = require('../scripts/calculator');

test('Add function adds two values', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Add function handles negative values', () => {
    expect(calculator.add(-5, -5)).toBe(-10);
});

test('Subtract function subtracts one value from another', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test('Subtract function handles negative values', () => {
    expect(calculator.subtract(-5, -4)).toBe(-1);
});