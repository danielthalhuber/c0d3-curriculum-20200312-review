const { nonPrimeToZero } = require('./non-prime-to-zero');

describe('nonPrimeToZero', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const snapshot = [...arr];
    nonPrimeToZero(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns a copy of an array with non-primes set to 0', () => {
    const arr = [-1, 0, 1, 2, 3, 4, 5, 6];
    const expected = [0, 0, 0, 2, 3, 0, 5, 0];
    expect(nonPrimeToZero(arr)).toEqual(expected);
  });

  test('returns copy of the original array when all numbers are prime', () => {
    const arr = [7, 13, 17];
    const expected = [...arr];
    expect(nonPrimeToZero(arr)).toEqual(expected);
  });

  test('returns empty array when called with empty array or no args', () => {
    const arr = [];
    const expected = [];
    expect(nonPrimeToZero(arr)).toEqual(expected);
    expect(nonPrimeToZero()).toEqual(expected);
  });
});
