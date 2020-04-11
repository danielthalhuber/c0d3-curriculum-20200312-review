/**
 * Return true if the given number is prime and false otherwise
 * @param {number} n - number to be tested
 * @param {number} i - divisor used to test n
 */
const isPrime = (n = 0, i = 2) => {
  if (n >= 2 && i > n ** 0.5) return true;
  if (n < 2 || n % i === 0) return false;

  return isPrime(n, i + 1);
};

/**
 * Return a copy of the given array, setting non-prime values to 0
 * @param {number[]} arr - array of numbers to be copied
 */
const nonPrimeToZero = (arr = []) => arr.map((n) => (isPrime(n) ? n : 0));

module.exports = {
  nonPrimeToZero,
};
