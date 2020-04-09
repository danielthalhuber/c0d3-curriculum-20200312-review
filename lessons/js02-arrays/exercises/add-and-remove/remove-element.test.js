const { removeElement } = require('./remove-element');

describe('removeElement', () => {
  test('removes specified elements', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    expect(removeElement(arr, 2)).toEqual([1, 3, 3, 3]);
  });

  test('mutates the original array', () => {
    const arr = [1, 2, 2, 3, 3, 3];
    removeElement(arr, 2);
    expect(arr).toEqual([1, 3, 3, 3]);
  });
});
