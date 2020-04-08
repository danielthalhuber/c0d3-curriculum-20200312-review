const { largest } = require('./largest');

describe('largest', () => {
  test('identifies largest in array of sorted positive integers', () => {
    expect(largest([1, 2, 3])).toEqual(3);
  });

  test('identifies largest in an array of unsorted positive integers', () => {
    expect(largest([4, 2, 0])).toEqual(4);
  });

  test('identifies largest in array of unsorted negative integers', () => {
    expect(largest([-1, -47, -2])).toEqual(-1);
  });
});
