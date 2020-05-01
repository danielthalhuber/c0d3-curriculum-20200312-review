jest.mock('request');
jest.mock('fs');

const { writeHtml20Pokemon } = require('./');
const request = require('request');
const fs = require('fs');

describe('writeHtml20Pokemon', () => {
  test('requests data and then writes HTML files of names', () => {
    const pokemon = [
      { name: 'pokemon1' },
      { name: 'pokemon2' },
      { name: 'pokemon3' },
    ];

    // make initial request
    writeHtml20Pokemon();
    expect(request.mock.calls.length).toEqual(1);

    // execute the callback for request to write the file
    const responseData = JSON.stringify({ results: pokemon });
    request.mock.calls[0][1](undefined, undefined, responseData);
    const html = pokemon.map(({ name }) => `<h1>${name}</h1>`).join('');

    expect(fs.writeFile.mock.calls.length).toEqual(1);
    expect(fs.writeFile.mock.calls[0][1]).toEqual(html);
  });
});
