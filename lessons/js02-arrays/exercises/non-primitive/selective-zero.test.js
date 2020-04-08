const { selectiveZero } = require('./selective-zero');

describe('selectiveZero', () => {
  test('mutates specified numeric values', () => {
    const testParams = [
      [[1, 2, 3], 1, [0, 2, 3]],
      [[1, 2, 3], 2, [1, 0, 3]],
      [[1, 2, 3], 3, [1, 2, 0]],
    ];

    testParams.forEach(([arr, num, result]) => {
      selectiveZero(arr, num);
      expect(arr).toEqual(result);
    });
  });

  test('does not mutate non-numeric values (uses strict equality)', () => {
    const testParams = [
      [['1', 2, 3], 1, ['1', 2, 3]],
      [[1, undefined, 3], 0, [1, undefined, 3]],
      [[1, 2, ''], 0, [1, 2, '']],
    ];

    testParams.forEach(([arr, num, result]) => {
      selectiveZero(arr, num);
      expect(arr).toEqual(result);
    });
  });
});
