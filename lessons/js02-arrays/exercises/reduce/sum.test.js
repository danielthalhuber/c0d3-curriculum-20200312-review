const { sum } = require('./sum');

describe('sum', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    sum(arr);
    expect(arr).toEqual(snapshot);
  });

  describe('returns the sum of the numbers in the given array', () => {
    const tests = [
      [[1, 2, 3], 6],
      [[1, -1], 0],
      [[], 0],
      [[-1, -3, -4, -8], -16],
    ];

    tests.forEach(([arr, result]) => {
      test(`sums [${arr}] to ${result}`, () => {
        expect(sum(arr)).toEqual(result);
      });
    });
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(sum(value)).toEqual(undefined);
      });
    });
  });
});
