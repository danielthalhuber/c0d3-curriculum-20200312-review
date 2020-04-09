const { copyWithout } = require('./copy-without');

describe('copyWithout', () => {
  test('excludes elements with specified values', () => {
    const arr = [1, 2, 3];
    expect(copyWithout(arr, 3)).toEqual([1, 2]);
  });

  test('does not mutate the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    copyWithout(arr, 2);
    expect(arr).toEqual(snapshot);
  });
});
