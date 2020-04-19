const { headers } = require('.');

describe('headers', () => {
  describe('returns a string of HTML props', () => {
    [
      [
        { 1: 1, 2: 2, 3: '3' },
        '<div><h1>3<h1><h2>3</h2></div>',
        'only one value is a string',
      ],
      [
        { 1: 1, 2: 'two', 3: '3' },
        '<div><h1>2<h1><h2>two</h2></div><div><h1>3<h1><h2>3</h2></div>',
        'multiple values are strings',
      ],
      [
        { 1: 'one!', 2: 'two', 3: '3' },
        '<div><h1>1<h1><h2>one!</h2></div><div><h1>2<h1><h2>two</h2></div><div><h1>3<h1><h2>3</h2></div>',
        'all values are strings',
      ],
      [
        { 1: '', 2: 2, 3: 3 },
        '<div><h1>1<h1><h2></h2></div>',
        'only string value is the empty string',
      ],
    ].forEach(([obj, expected, desc]) => {
      test(`when ${desc}`, () => {
        expect(headers(obj)).toEqual(expected);
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
        expect(headers(obj)).toEqual(expected);
      });
    });
  });
});
