const { allPrime } = require('./all-prime');

describe('allPrime', () => {
  test('returns true when array contains all prime numbers', () => {
    expect(allPrime([2, 3, 5, 7])).toEqual(true);
  });

  test('returns false when array contains composite and prime numbers', () => {
    expect(allPrime([-1, 0, 1, 2])).toEqual(false);
  });

  test('returns false when array contains all composite numbers', () => {
    expect(allPrime([4, 6, 8, 21])).toEqual(false);
  });
});
