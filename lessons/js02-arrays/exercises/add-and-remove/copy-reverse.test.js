const { copyReverse } = require('./copy-reverse');

describe('copyReverse', () => {
  test('returns an array with reversed elements (many elements)', () => {
    const arr = [1, 2, 3];
    const arrRev = [3, 2, 1];
    expect(copyReverse(arr)).toEqual(arrRev);
  });

  test('returns an array with reversed elements (single element)', () => {
    const arr = [1];
    const arrRev = [1];
    expect(copyReverse(arr)).toEqual(arrRev);
  });

  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    copyReverse(arr);
    expect(arr).toEqual(snapshot);
  });
});
