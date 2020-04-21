require('.').monkeyPatchArrayTiredForEach();

describe('Array.tiredForEach', () => {
  const arr = ['chinese', 'african', 'korean'];
  const fun = jest.fn();
  const delay = 1000;

  jest.useFakeTimers();
  console.log = jest.fn();

  test('calls callback for each element immediately', () => {
    const expectedCalls = [...Array(arr.length).keys()].map((i) => [
      arr[i],
      i,
      arr,
    ]);

    jest.advanceTimersByTime(0);
    arr.tiredForEach(fun, delay);
    expect(fun.mock.calls).toEqual(expectedCalls);
  });

  test('logs "too tired... try again later..." when called too soon', () => {
    const expectedCall = 'too tired... try again later...';

    jest.advanceTimersByTime(delay - 1);
    arr.tiredForEach(fun, delay);
    expect(console.log.mock.calls[0][0]).toEqual(expectedCall);
  });

  test('when called after delay, calls callback for each element ', () => {
    const expectedCalls = [...Array(arr.length).keys()].map((i) => [
      arr[i],
      i,
      arr,
    ]);

    jest.advanceTimersByTime(delay);
    arr.tiredForEach(fun, delay);
    expect(fun.mock.calls).toEqual(expectedCalls.concat(expectedCalls));
  });
});
