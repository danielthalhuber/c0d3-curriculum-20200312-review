jest.mock('node-fetch');
jest.mock('fs');

const fs = require('fs');
fs.promises = { writeFile: jest.fn() };

const { logLessons } = require('.');
const fetch = require('node-fetch');

describe('logLessons', () => {
  test('retrieves data, then writes HTML file of titles to curr dir', () => {
    const lessons = [
      { title: 'lesson1' },
      { title: 'lesson2' },
      { title: 'lesson3' },
    ];
    const expectedFile = './lessons.html';
    const expectedData = lessons
      .map(({ title }) => `</h1>${title}</h1>`)
      .join('');
    const expectedWriteArgs = [expectedFile, expectedData];

    fetch.mockReturnValue(Promise.resolve({ json: () => lessons }));
    return logLessons().then(() => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls[0]).toEqual(expectedWriteArgs);
    });
  });
});
