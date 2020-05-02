jest.mock('node-fetch');
jest.mock('fs');

const fs = require('fs');
fs.promises = { writeFile: jest.fn() };

const { writeHtml20Pokemon } = require('./');
const fetch = require('node-fetch');

describe('writeHtml20Pokemon', () => {
  test('requests data and then writes HTML files of names', () => {
    const pokemon = [
      { name: 'pokemon1' },
      { name: 'pokemon2' },
      { name: 'pokemon3' },
    ];
    const expectedFile = './names.html';
    const expectedData = pokemon.map(({ name }) => `<h1>${name}</h1>`).join('');
    const expectedWriteArgs = [expectedFile, expectedData];

    fetch.mockReturnValue(
      Promise.resolve({
        json: () => ({ results: pokemon }),
      })
    );

    return writeHtml20Pokemon().then(() => {
      expect(fetch.mock.calls.length).toEqual(1);

      expect(fs.promises.writeFile.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls[0]).toEqual(expectedWriteArgs);
    });
  });
});
