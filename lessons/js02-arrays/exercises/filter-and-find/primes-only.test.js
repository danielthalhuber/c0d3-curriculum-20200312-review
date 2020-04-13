const { primesOnly } = require('./primes-only');

describe('primesOnly', () => {
  test('does not change the original array', () => {
    const arr = [1, 2, 4];
    const snapshot = [...arr];
    primesOnly(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns a copy with only prime number elements', () => {
    const arr = [1, 2, 3, 4, 5, 6, 'turkey'];
    const expected = [2, 3, 5];
    expect(primesOnly(arr)).toEqual(expected);
  });

  test('returns an empty array when no elements are prime', () => {
    const arr = [1, 6, 'chicken'];
    expect(primesOnly(arr)).toEqual([]);
    expect(primesOnly([])).toEqual([]);
  });

  test('returns undefined when an array is not passed', () => {
    expect(primesOnly()).toEqual(undefined);
    expect(primesOnly('cow')).toEqual(undefined);
  });
});
