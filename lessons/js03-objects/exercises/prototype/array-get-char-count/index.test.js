require('.').monkeyPatchArrayGetCharCount();

describe('Array.getCharCount', () => {
  describe('returns correct counts for', () => {
    [
      [
        ['Charmander', 'Charmeleon', 'Charizard'],
        {
          C: 3,
          a: 5,
          d: 2,
          e: 3,
          h: 3,
          i: 1,
          l: 1,
          m: 2,
          n: 2,
          o: 1,
          r: 5,
          z: 1,
        },
      ],
      [['abc', 'def', 'eff!'], { a: 1, b: 1, c: 1, d: 1, e: 2, f: 3, '!': 1 }],
    ].forEach(([arr, expected]) => {
      test(`${arr}`, () => {
        expect(arr.getCharCount()).toEqual(expected);
      });
    });
  });

  describe('returns an empty object when', () => {
    [
      [['', '', ''], 'string elements are all empty'],
      [[], 'array is empty'],
    ].forEach(([arr, desc]) => {
      test(desc, () => {
        expect(arr.getCharCount()).toEqual({});
      });
    });
  });
});
