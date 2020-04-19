const { filterNonKeys } = require('.');

describe('filterNonKeys', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, '5'];
    const obj = { 5: 'five' };
    const snapshot = [...arr];
    filterNonKeys(arr, obj);
    expect(arr).toEqual(snapshot);
  });

  test('filters array to include only string keys of object', () => {
    const arr = ['one', 2, 'three', () => '4'];
    const obj = { one: 1, two: 2, three: 3 };
    const expected = ['one', 'three'];
    expect(filterNonKeys(arr, obj)).toEqual(expected);
  });

  describe('returns empty array when', () => {
    [
      [['1', 2, 3], { one: 1 }, 'array has no values that are keys of object'],
      [[], { one: 1 }, 'array is empty'],
      [['1', 2, 3], , 'object argument is missing'],
    ].forEach(([arr, obj, desc]) => {
      test(desc, () => {
        expect(filterNonKeys(arr, obj)).toEqual([]);
      });
    });
  });
});
