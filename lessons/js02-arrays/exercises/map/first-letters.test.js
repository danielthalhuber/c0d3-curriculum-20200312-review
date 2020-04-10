const { firstLetters } = require('./first-letters');

describe('firstLetters', () => {
  test('does not modify the original array', () => {
    const arr = ['add', 'bongo', 'chongo', 'dud'];
    const snapshot = [...arr];
    firstLetters(arr);
    expect(arr).toEqual(snapshot);
  });

  test('returns an array of first letters', () => {
    const arr = ['add', 'bongo', 'chongo', 'dud'];
    const expected = ['a', 'b', 'c', 'd'];
    expect(firstLetters(arr)).toEqual(expected);
  });

  test('returns an empty string when given an empty string', () => {
    const arr = [];
    const expected = [];
    expect(firstLetters(arr)).toEqual(expected);
  });
});
