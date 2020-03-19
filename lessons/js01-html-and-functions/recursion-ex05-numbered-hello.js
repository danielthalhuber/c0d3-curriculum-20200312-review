const numberedHello = (number = 0, count = 0, result = '') => {
  if (count >= number) return result;

  return numberedHello(number, count + 1, result + 'hello');
};

const withLog = (msg, func) => {
  return (...args) => !console.log(msg, ...args, func(...args));
};

const numberedHelloWithLog = withLog('numberedHello', numberedHello);

numberedHelloWithLog(5);
numberedHelloWithLog(0);
numberedHelloWithLog(-1);

module.exports = {
  numberedHello,
};
