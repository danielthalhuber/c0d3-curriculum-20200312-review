const { copyLast } = require('./copy-last');

describe('copyLast', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    copyLast(arr, 1);
    expect(arr).toEqual(snapshot);
  });

  describe('copies subset when positive is count < array length', () => {
    [
      [[1, 2, 3, 4, 5], 1],
      [[1, 2, 3, 4, 5], 2],
      [[1, 2, 3, 4, 5], 3],
      [[1, 2, 3, 4, 5], 4],
    ].forEach(([arr, exclude]) => {
      test(`copies last ${arr.length - exclude}`, () => {
        expect(copyLast(arr, exclude)).toEqual(arr.slice(exclude));
      });
    });
  });

  describe('copies whole array when exclude < 1', () => {
    [
      [[1, 2, 3, 4, 5], -3],
      [[1, 2, 3, 4, 5], -2],
      [[1, 2, 3, 4, 5], -1],
      [[1, 2, 3, 4, 5], 0],
    ].forEach(([arr, exclude]) => {
      test(`copies whole array when exclude is ${exclude}`, () => {
        expect(copyLast(arr, exclude)).toEqual(arr);
      });
    });
  });

  describe('returns a new empty array when count >= array length', () => {
    [
      [[1, 2, 3, 4, 5], 5],
      [[1, 2, 3, 4, 5], 400],
    ].forEach(([arr, exclude]) => {
      const relation =
        exclude === arr.length
          ? 'equal to'
          : exclude > arr.length
          ? 'greater than'
          : 'less than';

      test(`returns empty when exclude is ${relation} array length`, () => {
        expect(copyLast(arr, exclude)).toEqual(arr.slice(exclude));
      });
    });
  });
});
