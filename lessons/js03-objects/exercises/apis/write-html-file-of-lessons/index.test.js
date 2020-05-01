jest.mock('request');
jest.mock('fs');

const { writeHtmlLessons } = require('./');
const request = require('request');
const fs = require('fs');

test('requests data and then writes HTML files of titles', () => {
  const lessons = [
    { title: 'lesson1' },
    { title: 'lesson2' },
    { title: 'lesson3' },
  ];

  // make initial request
  writeHtmlLessons();
  expect(request.mock.calls.length).toEqual(1);

  // execute the callback for request to write the file
  const responseData = JSON.stringify(lessons);
  request.mock.calls[0][1](undefined, undefined, responseData);
  const html = lessons.map(({ title }) => `<h1>${title}</h1>`).join('');

  expect(fs.writeFile.mock.calls.length).toEqual(1);
  expect(fs.writeFile.mock.calls[0][1]).toEqual(html);
});
