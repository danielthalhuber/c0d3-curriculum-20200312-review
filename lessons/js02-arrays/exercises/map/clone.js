/**
 * Return an exact copy of the given array
 * @param {*[]} arr - the array to be cloned
 */
const clone = (arr) => (!arr ? undefined : arr.map((v) => v));

module.exports = {
  clone,
};
