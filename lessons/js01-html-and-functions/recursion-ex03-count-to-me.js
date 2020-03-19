const countToMe = (limit = 0, count = 8) => {
  if (count > limit) return;
  console.log(count);
  return countToMe(limit, count + 1);
};

countToMe(10);

module.exports = {
  countToMe,
};
