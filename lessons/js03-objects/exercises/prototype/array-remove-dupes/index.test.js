require('.').monkeyPatchArrayRemoveDupes();

describe('Array.removeDupes', () => {
  test('does not modify the original array', () => {
    const arr = [1, 1, 1, 1, 2, 2, 45, 45];
    const snapshot = [...arr];
    arr.removeDupes();

    expect(arr).toEqual(snapshot);
  });

  describe('removes duplicate elements from', () => {
    [
      [
        [9, 8, 7, 8, 7, 7, 7],
        [9, 8, 7],
      ],
      [
        ['Batman', 8, 7, 'Batman', 'Robin'],
        ['Batman', 8, 7, 'Robin'],
      ],
      [
        ['bob', 'bobo', 'obo', 'bobo'],
        ['bob', 'bobo', 'obo'],
      ],
    ].forEach(([arr, expected]) => {
      test(`${arr}`, () => {
        expect(arr.removeDupes()).toEqual(expected);
      });
    });
  });

  describe('returns empty array when', () => {
    [[[], 'array is empty']].forEach(([arr, desc]) => {
      test(desc, () => {
        expect(arr.removeDupes()).toEqual([]);
      });
    });
  });
});
