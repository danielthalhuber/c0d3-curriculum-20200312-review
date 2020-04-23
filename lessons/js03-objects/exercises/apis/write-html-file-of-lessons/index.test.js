const { writeHtmlLessons } = require('./');

describe('writeHtmlLessons', () => {
  test('not really a test...', (done) => {
    const callback = () => {
      expect(true).toEqual(true);
      done();
    };
    writeHtmlLessons(callback);
  });
});
