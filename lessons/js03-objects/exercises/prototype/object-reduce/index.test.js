require('.').monkeyPatchObjectReduce();

// helper function that returns a string representation of an object
const objString = (obj) =>
  `{ ${Object.entries(obj)
    .map(([k, v]) => `${k}: ${v}`)
    .join(', ')} }`;

describe('Object.reduce', () => {
  // setup

  const obj = {
    prop0: 0,
    prop1: 1,
    prop2: 2,
    prop3: 3,
  };

  // callback: create a string representation of the args received
  const callback = jest.fn(
    (ac, k, v, i, obj) => (ac += `|${k};${v};${i};${objString(obj)}`)
  );

  // expected: construct the expected return value, basically just a
  // concatenation of string representations of arguments received
  const expected = [...Array(4).keys()]
    .map((v) => `|prop${v};${v};${v};${objString(obj)}`)
    .join('');

  // the call arguments, less the accumulator
  const expectedCallArgs = Object.entries(obj).map(([k, v], i) => {
    return [k, v, i, obj];
  });

  // number of times the callback is called
  const expectedCallCount = expectedCallArgs.length;

  const result = obj.reduce(callback, '');

  // analyze the results

  describe('calls the given function', () => {
    test('once for each property', () => {
      expect(callback.mock.calls.length).toEqual(expectedCallCount);
    });

    test('with the correct key, value, and index of each property', () => {
      // remove the accumulator from each call and compare with expected
      const argsLessAcc = callback.mock.calls.map((args) => args.slice(1));

      expect(argsLessAcc).toEqual(expectedCallArgs);
    });
  });

  test('returns the expected, reduced value', () => {
    expect(result).toEqual(expected);
  });
});
