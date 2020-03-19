const love = (count = 0) => {
  if (count >= 99) return;
  console.log('The things I do for love');
  return love(count + 1);
};

love();

module.exports = {
  love,
};
