const {
  solution: isPrime,
} = require('../../js01-html-and-functions/challenges/06');

/**
 * Return a function that returns the next prime after the specified base number
 * @param {number} n - Base number for generating the next prime
 * @returns {function}
 * @requires module:../../js01-html-and-functions/challenges/06.isPrime
 */
const primeMachine = (n = 0) => {
  const nextPrime = () => (isPrime(++n) ? n : nextPrime());
  return nextPrime;
};

module.exports = {
  primeMachine,
};
