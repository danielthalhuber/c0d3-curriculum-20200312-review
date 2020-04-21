/**
 * Add the reduce method to Array.prototype
 */
const monkeyPatchArrayTiredForEach = () => {
  /**
   * Array.prototype.tiredForEach
   * Set the maxSize value of an array, beyond which length no additional elements can be added
   * @returns {*}
   */
  Array.prototype.tiredForEach = function (fun, delay) {
    if (fun === undefined || delay === undefined) return;

    // add tired prop
    if (!this.hasOwnProperty('tired')) this.tired = false;

    // check if we're too tired
    if (this.tired) return console.log('too tired... try again later...');

    // otherwise call forEach, go to sleep, and set an alarm to wake up
    this.tired = true;
    setTimeout(() => (this.tired = false), delay);
    this.forEach(fun);
  };
};

module.exports = {
  monkeyPatchArrayTiredForEach,
};
