const copyArray = (arr = [], i = 0, result = []) => {
  if (!arr.length || result.push(arr[i]) >= arr.length) return result;
  return copyArray(arr, i + 1, result);
};

module.exports = {
  copyArray,
};
