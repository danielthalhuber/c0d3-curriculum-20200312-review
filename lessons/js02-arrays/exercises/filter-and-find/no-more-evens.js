/**
 * Return a copy of an array, removing any even numbers
 * @param {*[]} arr - array to be copied
 */
const noMoreEvens = (arr) => {
  if (!Array.isArray(arr)) return;

  return arr.filter((n) => typeof n === 'number' && n % 2 !== 0);
};

module.exports = {
  noMoreEvens,
};
