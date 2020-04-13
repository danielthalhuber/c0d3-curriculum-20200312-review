/**
 * Return a copy of an array of numbers, excluding numbers less than or equal to 5
 * @param {number[]} arr - array of numbers to be filtered
 */
const largerThan5 = (arr) => {
  if (!Array.isArray(arr)) return;
  return arr.reduce((ac, cv) => {
    if (cv > 5) ac.push(cv);
    return ac;
  }, []);
};

module.exports = {
  largerThan5,
};
