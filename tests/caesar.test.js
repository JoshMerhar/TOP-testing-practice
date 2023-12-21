const caesarCipher = require('../scripts/caesar');

test('Shift input A to output B', () => {
    expect(caesarCipher('A', 1)).toBe('B');
});

test('Shift input A to output B with wrap aroud', () => {
    expect(caesarCipher('A', 27)).toBe('B');
});

test('Shift input a to output b', () => {
    expect(caesarCipher('a', 1)).toBe('b');
});

test('Shift input a to output b with wrap aroud', () => {
    expect(caesarCipher('a', 27)).toBe('b');
});

test('Shift string ABC to DEF', () => {
    expect(caesarCipher('ABC', 3)).toBe('DEF');
});

test('Shift string xYz to aBc', () => {
    expect(caesarCipher('xYz', 3)).toBe('aBc');
});

test('Characters other than letter should be unchanged', () => {
    expect(caesarCipher('abc!123', 3)).toBe('def!123');
});