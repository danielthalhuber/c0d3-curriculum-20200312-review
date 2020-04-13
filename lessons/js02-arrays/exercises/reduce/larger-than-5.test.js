const { largerThan5 } = require('./larger-than-5');

describe('largerThan5', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const snapshot = [...arr];
    largerThan5(arr);
    expect(arr).toEqual(snapshot);
  });

  describe('returns a copy, including only numbers > 5', () => {
    const tests = [
      [
        [-1, -3, -77, 6, -200, 300],
        [6, 300],
      ],
      [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [6, 7, 8, 9],
      ],
      [[1, 2, 3, 4, 5], []],
      [[], []],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns [${result}] for [${arr}]`, () => {
        expect(largerThan5(arr)).toEqual(result);
      });
    });
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(largerThan5(value)).toEqual(undefined);
      });
    });
  });
});
