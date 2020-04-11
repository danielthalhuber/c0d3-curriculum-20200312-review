const { noMoreEvens } = require('./no-more-evens');

describe('noMoreEvens', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const snapshot = [...arr];
    noMoreEvens(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns a copy without even numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const expected = [1, 3, 5, 7];
    expect(noMoreEvens(arr)).toEqual(expected);
  });

  test('returns an empty array when passed an empty array', () => {
    expect(noMoreEvens([])).toEqual([]);
  });

  test('returns undefined when passed argument is not an array', () => {
    expect(noMoreEvens(2)).toEqual(undefined);
  });
});
