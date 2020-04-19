const { removeLongestString } = require('.');

describe('removeLongestString', () => {
  describe('removes the longest string in an object', () => {
    [
      [{ 1: 1, 2: 2, 3: '3' }, { 1: 1, 2: 2 }, 'only one value is a string'],
      [
        { 1: 1, 2: 'two', 3: '3' },
        { 1: 1, 3: '3' },
        'multiple values are strings',
      ],
      [
        { 1: 'one!', 2: 'two', 3: '3' },
        { 2: 'two', 3: '3' },
        'all values are strings',
      ],
      [
        { 1: '', 2: 2, 3: 3 },
        { 2: 2, 3: 3 },
        'longest string is the empty string',
      ],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        removeLongestString(obj);
        expect(obj).toEqual(expected);
      });
    });
  });

  describe('does not modify an object', () => {
    [
      [{ 1: 1, 2: 2, 3: 3 }, 'no values are strings'],
      [{}, 'the object is empty'],
    ].forEach(([obj, desc]) => {
      test(`when ${desc}`, () => {
        const snapshot = { ...obj };
        removeLongestString(obj);
        expect(obj).toEqual(snapshot);
      });
    });
  });
});
