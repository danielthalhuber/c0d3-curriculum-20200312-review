const { runOnEach } = require('./run-on-each-map');

describe('runOnEach', () => {
  test('calls the function for each element', () => {
    const callback = jest.fn();
    const arr = [1, 2, 3];
    const args = arr.map((...args) => [...args]);
    runOnEach(arr, callback);
    expect(callback.mock.calls).toEqual(args);
  });

  test('returns an array of expected function return values', () => {
    const callback = jest.fn((v, i) => v + i);
    const arr = [1, 2, 3];
    const resultsExpected = arr.map((v, i) => v + i);
    runOnEach(arr, callback);
    const resultsActual = callback.mock.results
      .filter(({ type }) => type === 'return')
      .map(({ value }) => value);

    expect(resultsActual).toEqual(resultsExpected);
  });

  test('returns an empty array when no function is provided', () => {
    const arr = [1, 2, 3];
    expect(runOnEach(arr)).toEqual([]);
  });

  test('returns an empty array when no array is provided', () => {
    expect(runOnEach()).toEqual([]);
  });
});
