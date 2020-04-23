const { logLessons } = require('./');

describe('logLessons', () => {
  test('not really a test...', (done) => {
    const callback = () => {
      expect(true).toEqual(true);
      done();
    };
    logLessons(callback);
  });
});
