const { copyArray } = require('./copy-array');

describe('copyArray', () => {
  test('copies an array with elements', () => {
    const arr = [1, 2, 3];
    expect(copyArray(arr)).toEqual(arr);
  });

  test('copies an empty array', () => {
    const arr = [];
    expect(copyArray(arr)).toEqual(arr);
  });
});
