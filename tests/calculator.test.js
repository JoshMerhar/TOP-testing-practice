const calculator = require('../scripts/calculator');

test('Add 2 and 2 to equal 4', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('Add function handles negative values', () => {
    expect(calculator.add(-5, -5)).toBe(-10);
});

test('Subtract 4 from 5 to equal 1', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test('Subtract function handles negative values', () => {
    expect(calculator.subtract(-5, -4)).toBe(-1);
});

test('Divide 10 by 2 to equal 5', () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

test('Divide function handles negative values', () => {
    expect(calculator.divide(10, -2)).toBe(-5);
});

test('Return null when dividing by 0', () => {
    expect(calculator.divide(2, 0)).toBe(null);
});

test('Multiply 3 by 4 to equal 12', () => {
    expect(calculator.multiply(3, 4)).toBe(12);
});

test('Multiply function handles negative values', () => {
    expect(calculator.multiply(-5, 2)).toBe(-10);
});