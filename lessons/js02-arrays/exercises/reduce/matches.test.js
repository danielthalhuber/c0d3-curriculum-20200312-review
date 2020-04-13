const { matches } = require('./matches');

describe('matches', () => {
  test('does not modify the original array', () => {
    const arr = ['one', 'zero'];
    const snapshot = [...arr];
    matches(arr, 'one');
    expect(arr).toEqual(snapshot);
  });

  describe('returns the count of matches in the given array', () => {
    const tests = [
      [['one', 'two', 'three', 'one', 'five'], 'one', 2],
      [['', '', ''], '', 3],
      [[1, 2, 3, 'four'], 6, 0],
      [['one'], undefined, 0],
      [[], 'bonkers', 0],
    ];

    tests.forEach(([arr, value, result]) => {
      test(`when passed ([${arr}], ${value}), returns ${result}`, () => {
        expect(matches(arr, value)).toEqual(result);
      });
    });
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(matches(value)).toEqual(undefined);
      });
    });
  });
});
