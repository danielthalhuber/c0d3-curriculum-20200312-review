const { combineLess5 } = require('./combine-less-5');

describe('combineLess5', () => {
  test('does not modify the original array', () => {
    const arr = ['one', 'zero'];
    const snapshot = [...arr];
    combineLess5(arr);
    expect(arr).toEqual(snapshot);
  });

  describe('returns the concatenation of strings with length < 5', () => {
    const tests = [
      [['one', 'two', 'three', 'one', 'five'], 'onetwoonefive'],
      [['', '', ''], ''],
      [['1', '2', '3', 'four', 'seven'], '123four'],
      [['one'], 'one'],
      [[], ''],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns '${result}' for [${arr}]`, () => {
        expect(combineLess5(arr)).toEqual(result);
      });
    });
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(combineLess5(value)).toEqual(undefined);
      });
    });
  });
});
