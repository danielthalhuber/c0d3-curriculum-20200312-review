require('./pad').init();

describe('sum', () => {
  test('modifies the original array', () => {
    const arr = [1, 2, 3];
    const result = [1, 2, 3, '4'];
    arr.pad('4', 1);
    expect(arr).toEqual(result);
  });

  describe('appends the string the specified number of times', () => {
    const tests = [
      [[1, 2, 3], 'four', 1, [1, 2, 3, 'four']],
      [['it'], 'repeats', 3, ['it', 'repeats', 'repeats', 'repeats']],
      [['nothing happens'], 'something', 0, ['nothing happens']],
    ];

    tests.forEach(([arr, str, c, result]) => {
      test(`returns [${result}] for [${arr}], '${str}', and ${c}`, () => {
        arr.pad(str, c);
        expect(arr).toEqual(result);
      });
    });
  });
});
