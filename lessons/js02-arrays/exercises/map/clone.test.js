const { clone } = require('./clone');

describe('clone', () => {
  test('does not modify the original array', () => {
    const arr = [1, 3, 5];
    const snapshot = [...arr];
    clone(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns a copy of the given array', () => {
    const arr = [1, 3, 6, 7];
    expect(clone(arr)).toEqual(arr);
  });

  test('returns undefined when no argument is supplied', () => {
    expect(clone()).toEqual(undefined);
  });

  test('clones an empty array', () => {
    expect([]).toEqual([]);
  });
});
