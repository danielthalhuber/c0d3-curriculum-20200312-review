jest.mock('node-fetch');
jest.mock('fs');

const fs = require('fs');
fs.promises = { writeFile: jest.fn() };

const { writeHtmlFor20Pokemon } = require('./');
const fetch = require('node-fetch');

describe('writeHtmlFor20Pokemon', () => {
  test('requests data and then writes HTML files of names', () => {
    const pokemon = [
      {
        name: 'pokemon1',
        url: 'https://pokemon.api/1',
        sprites: { front_default: 'https://pokemon.api/1/image.png' },
      },
      {
        name: 'pokemon2',
        url: 'https://pokemon.api/2',
        sprites: { front_default: 'https://pokemon.api/2/image.png' },
      },
      {
        name: 'pokemon3',
        url: 'https://pokemon.api/3',
        sprites: { front_default: 'https://pokemon.api/3/image.png' },
      },
    ];
    const fileName = 'test.html';
    const expectedFile = `./${fileName}`;
    const expectedData = pokemon
      .map(
        ({ name, sprites: { front_default } }) =>
          `<h1>${name}</h1>\n<img src="${front_default}" />\n`
      )
      .join('');
    const expectedWriteArgs = [expectedFile, expectedData];
    let apiCall = -1;

    fetch.mockReturnValue(
      Promise.resolve({
        json: () =>
          apiCall++ === -1
            ? Promise.resolve({ results: pokemon.map(({ url }) => ({ url })) })
            : Promise.resolve(pokemon[apiCall - 1]),
      })
    );

    return writeHtmlFor20Pokemon(fileName).then(() => {
      expect(fetch.mock.calls.length).toEqual(1 + pokemon.length);

      expect(fs.promises.writeFile.mock.calls.length).toEqual(1);
      expect(fs.promises.writeFile.mock.calls[0]).toEqual(expectedWriteArgs);
    });
  });
});
