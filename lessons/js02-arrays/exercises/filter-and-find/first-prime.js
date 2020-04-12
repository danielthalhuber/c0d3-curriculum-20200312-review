/**
 * Return true if the given value is a prime number
 * @param {number} n - the number to be tested
 * @param {number} i - the current value of the divisor
 */
const isPrime = (n, i = 2) => {
  if (typeof n !== 'number' || n < 2 || (n > 2 && n % i === 0)) return false;
  if (n >= 2 && i > n ** 0.5) return true;

  return isPrime(n, i + 1);
};

const firstPrime = (arr) =>
  (Array.isArray(arr) ? arr : []).find((v) => isPrime(v));

module.exports = {
  firstPrime,
};
