const { largest } = require('./largest');

describe('largest', () => {
  test('does not modify the original array', () => {
    const arr = [1, 2, 3];
    const snapshot = [...arr];
    largest(arr);
    expect(arr).toEqual(snapshot);
  });

  test('identifies largest in array of sorted positive integers', () => {
    expect(largest([1, 2, 3])).toEqual(3);
  });

  test('identifies largest in an array of unsorted positive integers', () => {
    expect(largest([4, 2, 0])).toEqual(4);
  });

  test('identifies largest in array of unsorted negative integers', () => {
    expect(largest([-1, -47, -2])).toEqual(-1);
  });

  describe('returns undefined when argument is not an array', () => {
    const tests = [2, {}, undefined, '0'];

    tests.forEach((value) => {
      test(`returns undefined when argument is ${value}`, () => {
        expect(largest(value)).toEqual(undefined);
      });
    });
  });
});
