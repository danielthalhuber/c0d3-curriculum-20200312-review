require('.').monkeyPatchArraySetMaxSize();

describe('Array.setMaxSize', () => {
  test('does not modify elements of the original array', () => {
    const arr = [1, 1, 1, 1, 2, 2, 45, 45];
    const snapshot = [...arr];
    arr.setMaxSize();

    expect([...arr]).toEqual(snapshot);
  });

  const valuesToAdd = [
    'Edna',
    'Optimus',
    'Minion',
    'Edna',
    'Optimus',
    'Minion',
    'Edna',
    'Optimus',
    'Minion',
  ];

  describe('push is unchanged when pushing up to the maxSize', () => {
    const arr = [];
    const valuesToPush = [...valuesToAdd];
    const returnValues = [];
    const returnValuesExpected = [...Array(valuesToAdd.length).keys()].map(
      (v) => v + 1
    );

    arr.setMaxSize(valuesToPush.length);
    valuesToPush.forEach((value) => returnValues.push(arr.push(value)));

    test('elements can be pushed', () => {
      expect(arr.length).toEqual(valuesToPush.length);
    });

    test('push method returns length', () => {
      expect(returnValues).toEqual(returnValuesExpected);
    });
  });

  describe('push is changes when pushing beyond the maxSize', () => {
    const arr = [];
    const valuesToPush = [...valuesToAdd];
    const returnValues = [];
    const returnValuesExpected = [...Array(valuesToAdd.length).fill(1)];

    arr.setMaxSize(1);
    valuesToPush.forEach((value) => returnValues.push(arr.push(value)));

    test('elements cannot be pushed', () => {
      expect(arr.length).toEqual(1);
    });

    test('push method returns length', () => {
      expect(returnValues).toEqual(returnValuesExpected);
    });
  });

  describe('unshift is unchanged when unshifting up to the maxSize', () => {
    const arr = [];
    const valuesToUnshift = [...valuesToAdd];
    const returnValues = [];
    const returnValuesExpected = [...Array(valuesToAdd.length).keys()].map(
      (v) => v + 1
    );

    arr.setMaxSize(valuesToUnshift.length);
    valuesToUnshift.forEach((value) => returnValues.push(arr.unshift(value)));

    test('elements can be unshifted', () => {
      expect(arr.length).toEqual(valuesToUnshift.length);
    });

    test('unshift method returns length', () => {
      expect(returnValues).toEqual(returnValuesExpected);
    });
  });

  describe('unshift is changes when unshifting beyond the maxSize', () => {
    const arr = [];
    const valuesToUnshift = [...valuesToAdd];
    const returnValues = [];
    const returnValuesExpected = [...Array(valuesToAdd.length).fill(1)];

    arr.setMaxSize(1);
    valuesToUnshift.forEach((value) => returnValues.push(arr.unshift(value)));

    test('elements cannot be unshifted', () => {
      expect(arr.length).toEqual(1);
    });

    test('unshift method returns length', () => {
      expect(returnValues).toEqual(returnValuesExpected);
    });
  });
});
