const { firstLongerThan } = require('./first-longer-than');

describe('firstLongerThan', () => {
  test('does not modify the original array', () => {
    const ar = ['a', 'b', 'c', 'dd', 'eee'];
    const snapshot = [...ar];
    firstLongerThan(ar, 1);
    expect(ar).toEqual(snapshot);
  });

  describe('returns undefined when a longer string cannot be found', () => {
    [
      [['a', 'b', 'c'], 1, undefined],
      [['a', 'b', 'c'], undefined, undefined],
      [undefined, undefined, undefined],
    ].forEach(([ar, num, expected]) => {
      test(`returns ${expected} for ${ar} and ${num}`, () => {
        expect(firstLongerThan(ar, num)).toEqual(expected);
      });
    });
  });

  describe('returns the first longer string', () => {
    [
      [['a', 'bb', 'cc'], 1, 'bb'],
      [['aaa', 'b', 'ccc'], 2, 'aaa', undefined],
      [['aa', 'bbbb', 'cc'], 3, 'bbbb'],
    ].forEach(([ar, num, expected]) => {
      test(`returns ${expected} for ${ar} and ${num}`, () => {
        expect(firstLongerThan(ar, num)).toEqual(expected);
      });
    });
  });
});
