/**
 * Return the first string in the array with length greater than the given number
 * @param {string[]} arr - array of strings to search
 * @param {number} longerThan - length 1 less than length of target string
 */
const firstLongerThan = (arr = [], longerThan = Number.INFINITY) =>
  arr.find((cv) => cv.length > longerThan);

module.exports = {
  firstLongerThan,
};
