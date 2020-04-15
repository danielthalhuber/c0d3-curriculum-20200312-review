const { zeroSquare } = require('./zero-square');

describe('zeroSquare', () => {
  describe('returns undefined for non-integers or integers less than 1', () => {
    [undefined, '1', -47, 0, 1.333].forEach((n) => {
      test(`returns undefined for ${n}`, () => {
        expect(zeroSquare(n)).toEqual(undefined);
      });
    });
  });

  describe('returns the expected square array for valid integers', () => {
    [
      [1, [[0]]],
      [
        2,
        [
          [0, 0],
          [0, 0],
        ],
      ],
      [
        3,
        [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
      ],
    ].forEach(([n, expected]) => {
      test(`returns ${expected} for ${n}`, () => {
        expect(zeroSquare(n)).toEqual(expected);
      });
    });
  });
});
