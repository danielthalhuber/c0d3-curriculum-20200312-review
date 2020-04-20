require('.').monkeyPatchObjectFilter();

describe('Object.filter', () => {
  const obj = {
    prop0: 0,
    prop1: 1,
    prop2: 2,
    prop3: 3,
  };
  const callback = jest.fn((k, v) => {
    const lastKeyChar = k[k.length - 1];
    return !Number.isNaN(+lastKeyChar) && +lastKeyChar % 2 === 0;
  });
  const expected = { prop0: 0, prop2: 2 };
  const expectedCallArgs = Object.entries(obj).map(([k, v]) => [k, v]);
  const expectedCallCount = expectedCallArgs.length;

  const result = obj.filter(callback);

  describe('calls the given function', () => {
    test('once for each property', () => {
      expect(callback.mock.calls.length).toEqual(expectedCallCount);
    });

    test('with the correct key, value, and index of each property', () => {
      expect(callback.mock.calls).toEqual(expectedCallArgs);
    });
  });

  test('returns the expected, filtered object value', () => {
    expect(result).toEqual(expected);
  });
});
