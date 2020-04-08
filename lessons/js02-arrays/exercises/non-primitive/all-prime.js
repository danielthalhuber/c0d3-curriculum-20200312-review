/**
 * Return true if the given number is true and false otherwise
 * @param {number} n - number to test
 * @param {number} i - current value of divisor used in test
 */
const isPrime = (n = 0, i = 2) => {
  if (n >= 2 && i > n ** 0.5) return true;

  if (n < 2 || n % i === 0) return false;
  return isPrime(n, i + 1);
};

/**
 * Return true if all elements of the given array are prime and false otherwise
 * @param {number[]} arr - array of numbers to be tested
 * @param {number} i - current index of arr
 */
const allPrime = (arr = [], i = 0) => {
  if (arr.length && i >= arr.length) return true;

  if (!arr.length || !isPrime(arr[i])) return false;
  return allPrime(arr, i + 1);
};

module.exports = {
  allPrime,
};
