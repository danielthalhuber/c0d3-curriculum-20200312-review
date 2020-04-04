// this solution should have failed the test for js2/6

const solution = (arr, time, i = 0) => {
  if (i < arr.length) {
    solution(arr, time + time, i + 1);
    setTimeout(arr[i], time);
  }
};

// a test

// an array of functions that log the time when they are called
const loggers = [...Array(5).keys()].map((_, i) => () => {
  // log time for this call
  console.log('\niteration:', i);
  console.timeLog('test');

  // end the timer if this is the last call
  if (i === 4) console.timeEnd('test');
});

// start the timer
console.time('test');

// run the test
solution(loggers, 1000);

/*
  Result logged to the console:

  iteration: 0
  test: 1008ms

  iteration: 1
  test: 2008ms

  iteration: 2
  test: 4008ms

  iteration: 3
  test: 8004ms

  iteration: 4
  test: 16008ms
  test: 16008ms - timer ended
*/
