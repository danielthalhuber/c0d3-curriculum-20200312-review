const { increasing } = require('./increasing');

describe('increasing', () => {
  test('returns true when elements are strictly increasing', () => {
    expect(increasing([2, 3, 5, 7])).toEqual(true);
  });

  test('returns false when elements are increasing, but not strictly', () => {
    expect(increasing([-74, -2, 32, 32, 100])).toEqual(false);
  });

  test('returns false when elements are not increasing', () => {
    expect(increasing([1, 2, 3, -45])).toEqual(false);
  });
});
