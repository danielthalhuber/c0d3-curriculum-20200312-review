require('./fizzbuzz').init();

describe('fizzbuzz', () => {
  test('modifies the original array', () => {
    const arr = [1, 2, 3];
    const result = [1, 2, 'fizz'];
    arr.fizzbuzz();
    expect(arr).toEqual(result);
  });

  describe('converts numbers to "fizz", "buzz" and "fizzbuzz" when divisible by 3, 5, and 15 respectively', () => {
    const tests = [
      [
        [1, 2, 3],
        [1, 2, 'fizz'],
      ],
      [
        [3, 5, 15, 17, 60],
        ['fizz', 'buzz', 'fizzbuzz', 17, 'fizzbuzz'],
      ],
    ];

    tests.forEach(([arr, result]) => {
      test(`returns [${result}] for [${arr}],`, () => {
        arr.fizzbuzz();
        expect(arr).toEqual(result);
      });
    });
  });
});
