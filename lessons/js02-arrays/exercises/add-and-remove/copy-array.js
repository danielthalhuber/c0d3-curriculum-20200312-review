const copyArray = (arr = [], result = []) => {
  if (result.length >= arr.length) return result;

  result.push(arr[result.length]);
  return copyArray(arr, result);
};

module.exports = {
  copyArray,
};
