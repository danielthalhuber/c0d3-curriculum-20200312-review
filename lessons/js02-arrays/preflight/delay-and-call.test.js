const { delayAndCall } = require('./delay-and-call');

describe('delayAndCall', () => {
  /*
  Async method is not compatible with mock timer tests below

  it('returns a function that calls the given function after the specified delay', done => {
    let count = 0;
    const increment = () => {
      count += 1;
    };

    const fun = delayAndCall(2000, increment);
    fun();

    setTimeout(() => {
      if (count !== 0) return done('function was called too soon');
    }, 1800);

    setTimeout(() => {
      return count === 0
        ? done('function was called too late')
        : count > 1
        ? done('function was called too many times')
        : done();
    }, 2200);
  }); */

  // new method, see https://jestjs.io/docs/en/timer-mocks
  // swap out setTimeout for a jest mock
  jest.useFakeTimers();
  it('returns a function that calls a given function after 1 second', () => {
    const delay = 1000;
    const callback = jest.fn();
    const fun = delayAndCall(delay, callback);
    fun();

    // shouldn't be called until after delay
    expect(callback).not.toBeCalled();

    // advance time to delay ms and verify that callback was called
    jest.advanceTimersByTime(delay);
    expect(callback).toBeCalled();
  });

  // reset the mock timers before running the next test
  jest.useFakeTimers();
  it('returns a function that can be called repeatedly with the same behavior', () => {
    const delay = 1000;
    const callback = jest.fn();
    const fun = delayAndCall(delay, callback);
    fun();

    // shouldn't be called until after delay
    expect(callback).not.toBeCalled();

    // advance time to delay ms and verify that callback was called
    jest.advanceTimersByTime(delay);
    expect(callback).toBeCalled();

    // validate that callback has been called exactly twice after fun's second timer runs
    fun();
    // alternate method for advancing time to the time where all pending timers have been executed
    jest.runAllTimers();
    expect(callback).toHaveBeenCalledTimes(2);
  });
});
