const countTo98 = (count = 0) => {
  if (count >= 99) return;

  console.log(count);
  return countTo98(count + 1);
};

countTo98();

module.exports = {
  countTo98,
};
