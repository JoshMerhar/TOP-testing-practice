const reverse = require('../scripts/reverse');

test('Reverse string', () => {
    expect(reverse('hello')).toBe('olleh');
});

test('Reverse string with other characters', () => {
    expect(reverse('123!')).toBe('!321');
});

test('Empty input returns null', () => {
    expect(reverse('')).toBe(null);
});