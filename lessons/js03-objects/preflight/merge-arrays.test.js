const { mergeArrays } = require('./merge-arrays');

describe('mergeArrays', () => {
  test('does not modify original arrays', () => {
    const ar1 = [1, 2, 3];
    const ar2 = [4, 5, 6];
    const snapshot1 = [...ar1];
    const snapshot2 = [...ar2];

    mergeArrays(ar1, ar2);
    expect(ar1).toEqual(snapshot1);
    expect(ar2).toEqual(snapshot2);
  });

  test('merges every element from each array, in order', () => {
    const ar1 = [1, 2, 3];
    const ar2 = [4, 5, 6];
    expect(mergeArrays(ar1, ar2)).toEqual(ar1.concat(ar2));
  });

  describe('handles one or more empty array or missing arguments', () => {
    [
      [[1, 2, 3], [], [1, 2, 3]],
      [[], [1, 2, 3], [1, 2, 3]],
      [[1, 2, 3], , [1, 2, 3]],
      [undefined, [1, 2, 3], [1, 2, 3]],
      [[], [], []],
      [[], undefined, []],
      [undefined, [], []],
      [undefined, undefined, []],
    ].forEach(([ar1, ar2, expected]) => {
      test(`${ar1} and ${ar2} are merged to [${expected}]`, () => {
        expect(mergeArrays(ar1, ar2)).toEqual(expected);
      });
    });
  });
});
