const { longest } = require('./longest');

describe('longest', () => {
  test('does not modify the original array', () => {
    const arr = ['one', 'zero'];
    const snapshot = [...arr];
    longest(arr);
    expect(arr).toEqual(snapshot);
  });

  describe('returns the longest of the strings in the given array', () => {
    const tests = [
      [['one', 'onetwothree', 'threetwo'], 'onetwothree'],
      [['', '', ''], ''],
    ];

    tests.forEach(([arr, result]) => {
      test(`when passed [${arr}], returns ${result}`, () => {
        expect(longest(arr)).toEqual(result);
      });
    });
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(longest(value)).toEqual(undefined);
      });
    });
  });
});
