const { onlyIndex } = require('./only-index');

describe('onlyIndex', () => {
  test('returns array of values from the given arrays and index', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const index = 2;
    const expected = arr.map((arr) => arr[index]);
    expect(onlyIndex(arr, index)).toEqual(expected);
  });

  test('does not modify the original array', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
    ];
    const snapshot = [...arr];
    const index = 2;
    onlyIndex(arr, index);
    expect(arr).toEqual(snapshot);
  });

  describe('returns an empty array for invalid arguments', () => {
    test('returns [] when no common index is provided', () => {
      const arr = [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ];
      const expected = [];
      expect(onlyIndex(arr)).toEqual(expected);
    });

    test('returns [] when no arguments are provided', () => {
      const expected = [];
      expect(onlyIndex()).toEqual(expected);
    });
  });
});
