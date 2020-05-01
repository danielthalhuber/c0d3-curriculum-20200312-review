jest.mock('request');
console.log = jest.fn();

const { logLessons } = require('./');
const request = require('request');

describe('logLessons', () => {
  describe('retrieves lesson data and logs lesson titles', () => {
    const lessons = [
      { title: 'lesson1' },
      { title: 'lesson2' },
      { title: 'lesson3' },
    ];

    test('makes single request to API', () => {
      logLessons();
      expect(request.mock.calls.length).toEqual(1);
    });

    test('logs each lesson title to the console', () => {
      request.mock.calls[0][1](undefined, undefined, JSON.stringify(lessons));
      expect(console.log.mock.calls.length).toEqual(1);
      expect(console.log.mock.calls[0][0]).toEqual(
        lessons.map(({ title }) => '\n' + title).join('')
      );
    });
  });
});
