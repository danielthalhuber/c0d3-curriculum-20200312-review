const fizzbuzz = (limit = 0, count = 1) => {
  if (count > limit) return;

  const fizz = count % 3 === 0 ? 'fizz' : '';
  const buzz = count % 5 === 0 ? 'buzz' : '';
  console.log(fizz + buzz || count);

  return fizzbuzz(limit, count + 1);
};

fizzbuzz(16);

module.exports = {
  fizzbuzz,
};
