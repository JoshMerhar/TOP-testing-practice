const capitalize = require('../scripts/capitalize');

test('Capitalize first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('Empty input returns null', () => {
    expect(capitalize('')).toBe(null);
});