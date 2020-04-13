require('./get-evens').init();

describe('getEvens', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    arr.getEvens();
    expect(arr).toEqual(snapshot);
  });

  describe('returns an array of the even numbers from the array', () => {
    const tests = [
      [
        [3, 5, 7, 11, 13, 4, 77, 99, 43, 6],
        [4, 6],
      ],
      [
        [2, 22, 222, 4444, 44, 4],
        [2, 22, 222, 4444, 44, 4],
      ],
      [[7, 77, 7777, 33, 333, 3], []],
      [[], []],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns [${result}] for [${arr}]`, () => {
        expect(arr.getEvens()).toEqual(result);
      });
    });
  });
});
