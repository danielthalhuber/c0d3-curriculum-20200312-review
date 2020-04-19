const { commas } = require('.');

describe('commas', () => {
  describe('returns a comma separated list of values', () => {
    [
      [{ 1: 1, 2: 2, 3: '3' }, '3', 'only one value is a string'],
      [{ 1: 1, 2: 'two', 3: '3' }, 'two,3', 'multiple values are strings'],
      [{ 1: 'one!', 2: 'two', 3: '3' }, 'one!,two,3', 'all values are strings'],
      [{ 1: '', 2: 2, 3: 3 }, '', 'longest string is the empty string'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(commas(obj)).toEqual(expected);
      });
    });
  });

  describe('returns an empty string', () => {
    [
      [{ 1: 1, 2: 2, 3: 3 }, '', 'no values are strings'],
      [{}, '', 'the object is empty'],
      [, '', 'the object argument is missing'],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(commas(obj)).toEqual(expected);
      });
    });
  });
});
