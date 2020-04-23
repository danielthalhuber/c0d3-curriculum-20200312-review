const { writeHtml20Pokemon } = require('./');

describe('writeHtml20Pokemon', () => {
  test('not really a test...', (done) => {
    const callback = () => {
      expect(true).toEqual(true);
      done();
    };
    writeHtml20Pokemon(callback);
  });
});
