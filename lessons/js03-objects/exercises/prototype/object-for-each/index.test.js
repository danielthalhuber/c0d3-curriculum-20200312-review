require('.').monkeyPatchObjectForEach();

describe('Object.forEach', () => {
  describe('calls the given function', () => {
    const obj = {
      prop0: 0,
      prop1: 1,
      prop2: 2,
      prop3: 3,
    };
    const callback = jest.fn();
    const expectedCallArgs = Object.entries(obj).map(([k, v], i) => [k, v, i]);
    const expectedCallCount = expectedCallArgs.length;
    obj.forEach(callback);

    test('once for each property', () => {
      expect(callback.mock.calls.length).toEqual(expectedCallCount);
    });

    test('with the correct key, value, and index of each property', () => {
      expect(callback.mock.calls).toEqual(expectedCallArgs);
    });
  });
});
