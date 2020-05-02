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
    const expectedPath = './lessons.html';
    const expectedData = `<h1>${lessons
      .map(({ title }) => title)
      .join('</h1><h1>')}</h1>`;
    const expectedWriteArgs = [expectedPath, expectedData];

    fetch.mockReturnValue(Promise.resolve({ json: () => lessons }));
    return logLessons().then(() => {
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls[0]).toEqual(expectedWriteArgs);
    });
  });
});
