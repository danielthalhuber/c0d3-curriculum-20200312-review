/**
 * @typedef call
 * @type {array}
 * @property {*} 0 - argument of function call
 * @property {function} 1 - function to call
 */

/**
 * Execute the functions with given arguments at specified interval (delay)
 * @param {call[]} calls - function calls
 * @param {*} delay - delay before executing next call
 */
const callAtInterval = (calls = [], delay = 0) => {
  if (calls.length === 0) return;
  calls[0][1](calls[0][0]);
  setTimeout(() => callAtInterval(calls.slice(1), delay), delay);
};

/**
 * Write a function that takes in an object and a number (milliseconds).
 * - You must call each function value of the object {"nVal": (k) => {...}}
 * - {"nVal": (k) => {...When this function runs, k is "nVal"...}}
 * @param {object} obj
 * @param {number} num - ms delay before calling next function value
 */

const solution = (obj, num) => {
  const calls = Object.entries(obj).filter(
    ([_, value]) => typeof value === 'function'
  );

  callAtInterval(calls, num);
};

module.exports = {
  solution,
};
