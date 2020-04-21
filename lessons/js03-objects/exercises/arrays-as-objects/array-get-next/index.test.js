require('.').monkeyPatchArrayGetNext();

describe('Array.getNext', () => {
  test('does not modify elements of the original array', () => {
    const arr = [1, 1, 1, 1, 2, 2, 45, 45];
    const snapshot = [...arr];
    arr.getNext();

    expect([...arr]).toEqual(snapshot);
  });

  describe('returns the next element', () => {
    const arr = ['Edna', 'Optimus', 'Minion'];
    const expectedResults = [
      'Edna',
      'Optimus',
      'Minion',
      'Edna',
      'Optimus',
      'Minion',
      'Edna',
      'Optimus',
      'Minion',
    ];

    expectedResults.forEach((expectedResult, i) => {
      test(`call ${1 + i} for [${arr}] returns ${expectedResult}`, () => {
        expect(arr.getNext()).toEqual(expectedResult);
      });
    });
  });

  describe('returns undefined when', () => {
    [[[], 'array is empty']].forEach(([arr, desc]) => {
      test(desc, () => {
        expect(arr.getNext()).toEqual(undefined);
      });
    });
  });
});
