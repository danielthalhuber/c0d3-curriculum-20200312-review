const { oddToZero } = require('./odd-to-zero');

describe('oddToZero', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    oddToZero(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns copy of given array, transforming odd values to zero', () => {
    const arr = [1, 2, 3];
    const expected = [0, 2, 0];
    expect(oddToZero(arr)).toEqual(expected);
  });

  test('returns copy of original when no elements are odd', () => {
    const arr = [6, 2, 8];
    const expected = [...arr];
    expect(oddToZero(arr)).toEqual(expected);
  });

  test('returns array of all zeros when all elements are odd', () => {
    const arr = [11, 13, 15];
    const expected = [0, 0, 0];
    expect(oddToZero(arr)).toEqual(expected);
  });
});
