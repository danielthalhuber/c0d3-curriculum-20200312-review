const { append } = require('./append');

describe('append', () => {
  test('does not modify the original array', () => {
    const arr = ['a', 'b'];
    const snapshot = [...arr];
    append(arr, '!');
    expect(arr).toEqual(snapshot);
  });

  test('returns a copy, appending the given string to each element', () => {
    const arr = ['a', 'b', 'c'];
    const expected = ['a!', 'b!', 'c!'];
    expect(append(arr, '!')).toEqual(expected);
  });

  test('returns empty array when args are empty array or missing', () => {
    expect(append()).toEqual([]);
    expect(append([], 'a')).toEqual([]);
  });
});
