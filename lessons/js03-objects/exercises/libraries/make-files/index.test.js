// mock the modules that makeFiles depends on
jest.mock('fs');

// makeFiles will now import the mocked module
const { makeFiles } = require('./');

// create a local reference to the mocked module to access calls in tests
const fs = require('fs');

describe('makeFiles', () => {
  describe('writes the specified number of files to the current dir', () => {
    fs.writeFile.mockClear();

    const fileCount = 5;
    const fileContent = "Gotta catch 'em all";
    const expectedFiles = [...Array(fileCount).keys()].map((v, _, ar) => [
      `./trainer${ar.length - v}.txt`,
      fileContent,
    ]);

    makeFiles(fileCount);
    expectedFiles.forEach(([name, content], i) => {
      describe(`calls writeFilewrites ${name}, with content "${content}"`, () => {
        afterAll(() => {
          // call the callback function supplied to writeFile in order
          // to make the next recursive call
          fs.writeFile.mock.calls[i][2]();
        });

        test('writeFile is called only once to write the file', () => {
          expect(fs.writeFile.mock.calls.length).toEqual(i + 1);
        });

        test('writeFile is called with correct file name', () => {
          expect(fs.writeFile.mock.calls[i][0]).toEqual(name);
        });

        test('writeFile is called with correct file content', () => {
          expect(fs.writeFile.mock.calls[i][1]).toEqual(content);
        });
      });
    });
  });
});
