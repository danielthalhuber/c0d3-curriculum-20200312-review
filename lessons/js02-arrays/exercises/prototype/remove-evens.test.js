require('./remove-evens').init();

describe('removeEvens', () => {
  test('modifies the original array', () => {
    const arr = [1, 2, 3];
    const result = [1, 3];
    arr.removeEvens();
    expect(arr).toEqual(result);
  });

  describe('removes even numbers from the array', () => {
    const tests = [
      [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [1, 3, 5, 7],
      ],
      [[2, 4, 6], []],
      [[], []],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns [${result}] for [${arr}],`, () => {
        arr.removeEvens();
        expect(arr).toEqual(result);
      });
    });
  });
});
