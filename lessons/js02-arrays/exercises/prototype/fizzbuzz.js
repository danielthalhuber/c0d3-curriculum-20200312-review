/**
 * Add a prototype method
 */
const init = () => {
  /**
   * Transform the array of numbers so that:
   *  - Multiples of 3 are replaced with 'fizz'
   *  - Multiples of 5 are replaced with 'buzz'
   *  - Multiples of 3 and 5 are replaced with 'fizzbuzz'
   * @param {number} i - private, current index of the array
   */
  Array.prototype.fizzbuzz = function (i = 0) {
    if (i >= this.length) return;

    let word = '';
    if (this[i] % 3 === 0) word += 'fizz';
    if (this[i] % 5 === 0) word += 'buzz';
    if (word) this[i] = word;
    return this.fizzbuzz(i + 1);
  };
};

module.exports = {
  init,
};
