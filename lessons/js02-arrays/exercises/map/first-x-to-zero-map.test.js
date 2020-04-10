const { firstXToZero } = require('./first-x-to-zero-map');

describe('firstXToZero', () => {
  test('does not mutate elements when count is zero', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [1, 2, 3, 4, 5];
    firstXToZero(arr);
    expect(arr).toEqual(result);
  });

  test('mutates the first element when count is 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [0, 2, 3, 4, 5];
    expect(firstXToZero(arr, 1)).toEqual(result);
  });

  test('mutates the first 3 elements when count is 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [0, 0, 0, 4, 5];
    expect(firstXToZero(arr, 3)).toEqual(result);
  });
});
