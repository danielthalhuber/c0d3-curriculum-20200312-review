const { keyOfLongestString } = require('.');

describe('keyOfLongestString', () => {
  describe('returns the longest string in an object', () => {
    [
      [{ 1: 1, 2: 2, 3: '3' }, '3', 'only one value is a string'],
      [{ 1: 1, 2: 'two', 3: '3' }, '2', 'multiple values are strings'],
      [{ 1: 'one!', 2: 'two', 3: '3' }, '1', 'all values are strings'],
      [{ 1: '', 2: 2, 3: 3 }, '1', 'longest string is the empty string'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(keyOfLongestString(obj)).toEqual(expected);
      });
    });
  });

  describe('returns undefined', () => {
    [
      [{ 1: 1, 2: 2, 3: 3 }, undefined, 'no values are strings'],
      [{}, undefined, 'the object is empty'],
      [, undefined, 'the object argument is missing'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(keyOfLongestString(obj)).toEqual(expected);
      });
    });
  });
});
