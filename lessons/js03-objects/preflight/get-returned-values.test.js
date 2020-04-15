const { getReturnedValues } = require('./get-returned-values');

describe('getReturnedValues', () => {
  test('does not modify the given array', () => {
    const arr = [() => 1, () => 2, () => 3];
    const snapshot = [...arr];
    getReturnedValues(arr);
    expect(arr).toEqual(snapshot);
  });

  describe('returns empty array for empty array or undefined', () => {
    [
      [[], []],
      [undefined, []],
    ].forEach(([arr, expected]) => {
      test(`returns ${expected} for ${arr}`, () => {
        expect(getReturnedValues(arr)).toEqual(expected);
      });
    });
  });

  describe('returns array of expected return values', () => {
    [
      [
        [() => 1, () => 2, () => 3],
        [1, 2, 3],
      ],
      [
        [() => '1', () => '2', () => '3'],
        ['1', '2', '3'],
      ],
    ].forEach(([arr, expected]) => {
      test(`returns ${expected} for [${arr}]`, () => {
        expect(getReturnedValues(arr)).toEqual(expected);
      });
    });
  });
});
