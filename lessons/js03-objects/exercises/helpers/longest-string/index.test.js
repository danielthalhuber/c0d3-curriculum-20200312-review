const { longestString } = require('.');

describe('longestString', () => {
  describe('returns the longest string in an object', () => {
    [
      [{ 1: 1, 2: 2, 3: '3' }, '3', 'only one value is a string'],
      [{ 1: 1, 2: 'two', 3: '3' }, 'two', 'multiple values are strings'],
      [{ 1: 'one!', 2: 'two', 3: '3' }, 'one!', 'all values are strings'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(longestString(obj)).toEqual(expected);
      });
    });
  });

  describe('returns an empty string', () => {
    [
      [{ 1: '', 2: 2, 3: 3 }, '', 'longest string is the empty string'],
      [{ 1: 1, 2: 2, 3: 3 }, '', 'no values are strings'],
      [{}, '', 'the object is empty'],
      [, '', 'the object argument is missing'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(longestString(obj)).toEqual(expected);
      });
    });
  });
});
