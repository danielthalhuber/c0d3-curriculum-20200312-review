const { firstPrime } = require('./first-prime');

describe('firstPrime', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    firstPrime(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns the first prime number', () => {
    const arr = ['0', 1, 6, 8, 22, 33, 7, 9];
    expect(firstPrime(arr)).toEqual(7);
  });

  test('returns undefined when no primes exist in array', () => {
    const arr = [4, 6, 10, 44, 66];
    expect(firstPrime(arr)).toEqual(undefined);
  });

  test('returns undefined for non-array inputs', () => {
    expect(firstPrime(2)).toEqual(undefined);
    expect(firstPrime()).toEqual(undefined);
  });
});
