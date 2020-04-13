require('./sum').init();

describe('sum', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    arr.sum();
    expect(arr).toEqual(snapshot);
  });

  describe('returns the sum of the numbers', () => {
    const tests = [
      [[1, 2, 3], 6],
      [[-1, -2, -3], -6],
      [[-1, 1, -2, 2, -3, 3], 0],
      [[], 0],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns ${result} for [${arr}]`, () => {
        expect(arr.sum()).toEqual(result);
      });
    });
  });
});
