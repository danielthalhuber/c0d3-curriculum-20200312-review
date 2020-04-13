require('./get-iterator').init();

describe('getIterator', () => {
  test('returns a function', () => {
    const result = [].getIterator();
    expect(typeof result).toEqual('function');
  });

  test('iterator does not modify the original array when called', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    const arrIterator = arr.getIterator();
    arrIterator();
    expect(arr).toEqual(snapshot);
  });

  describe('iterator returns next value from the array', () => {
    const arrays = [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [2, 4, 6],
    ];

    arrays.forEach((arr) => {
      const arrIterator = arr.getIterator();

      [...Array(arr.length + 1).keys()].forEach((i) => {
        const call = i + 1;
        const expected = arr[i % arr.length];
        test(`call ${call} to iterator of ${arr} returns ${expected}`, () => {
          expect(arrIterator()).toEqual(expected);
        });
      });
    });
  });
});
