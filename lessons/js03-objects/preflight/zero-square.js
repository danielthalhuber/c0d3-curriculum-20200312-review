/**
 * Return a square two dimensional array of length equal to the given number, filled with zeros
 * @param {number} n - integer length of square
 */
const zeroSquare = (n) => {
  if (!Number.isInteger(n) || n < 1) return;
  return Array(n)
    .fill(null)
    .map((_) => Array(n).fill(0));
};

module.exports = {
  zeroSquare,
};
