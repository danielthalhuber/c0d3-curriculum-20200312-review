require('.').monkeyPatchArrayGetMostCommon();

describe('Array.getMostCommon', () => {
  describe('returns most common for', () => {
    [
      [[9, 8, 7, 8, 7, 7, 7], 7],
      [['Batman', 8, 7, 'Batman', 'Robin'], 'Batman'],
    ].forEach(([arr, expected]) => {
      test(`${arr}`, () => {
        expect(arr.getMostCommon()).toEqual(expected);
      });
    });
  });

  describe('returns undefined when', () => {
    [[[], 'array is empty']].forEach(([arr, desc]) => {
      test(desc, () => {
        expect(arr.getMostCommon()).toEqual(undefined);
      });
    });
  });
});
