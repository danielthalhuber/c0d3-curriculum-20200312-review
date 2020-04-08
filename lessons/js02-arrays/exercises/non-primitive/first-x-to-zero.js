const firstXToZero = (arr, count = 0, i = 0) => {
  if (i >= count || i >= arr.length) return;

  arr[i] = 0;
  return firstXToZero(arr, count, i + 1);
};

module.exports = {
  firstXToZero,
};
