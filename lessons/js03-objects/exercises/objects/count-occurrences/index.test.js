const { countOccurrences } = require('.');

describe('countOccurrences', () => {
  test('returns an object that counts occurrences of strings', () => {
    const arr = ['abc', 'a', 'abc', 'b', 'abc', 'a', 'b', 'c', 'abc'];
    const expected = { abc: 4, a: 2, b: 2, c: 1 };

    expect(countOccurrences(arr)).toEqual(expected);
  });

  test('returns an object that counts occurrences of numbers', () => {
    const arr = [1, 2, 3, 4, 4, 7, 7, 7];
    const expected = { 1: 1, 2: 1, 3: 1, 4: 2, 7: 3 };

    expect(countOccurrences(arr)).toEqual(expected);
  });

  test('returns an empty object when given an empty array', () => {
    const arr = [];
    const expected = {};

    expect(countOccurrences(arr)).toEqual(expected);
  });
});
