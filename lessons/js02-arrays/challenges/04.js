/**
 * Write a function called solution that
 *   Takes in 2 parameters: an array of numbers and a function
 *   and returns a function
 *
 * When the returned function is called for the first time,
 *     the input function will be called with the first element of the array.
 * When the returned function is called for the second time,
 *     the input function will be called with the second element of the array.
 * When the returned function is called for the third time,
 *     the input function will be called with the third element of the array.
 * ... loop back to first element when it reaches the end
 * @param {array} arr - array of argument values for cb
 * @param {function} cb - called with each value of arr
 * @returns {function}
 */

const solution = (arr = [], cb = () => false) => {
  let i = -1;
  return (val) => {
    i = (i + 1) % arr.length;
    return cb(arr[i]);
  };
};

module.exports = {
  solution,
};
