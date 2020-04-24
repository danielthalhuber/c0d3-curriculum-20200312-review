// mock the modules that listFiles depends on
jest.mock('fs');

// listFiles now imports the mocked version of fs
const { listFiles } = require('./');

// reference to the mocked fs, used to access mock calls in tests
const fs = require('fs');

describe('listFiles', () => {
  describe('writes an HTML file of current directory file names', () => {
    fs.writeFile.mockClear();
    fs.readdir.mockClear();
    listFiles();
    test('calls readdir once to get names of files in the current dir', () => {
      expect(fs.readdir.mock.calls.length).toEqual(1);
      expect(fs.readdir.mock.calls[0][0]).toEqual('./');
    });

    test('calls writeFile once to write HTML to ./files.html', () => {
      const files = ['file1', 'file2'];
      const fileData = files.reduce((ac, cv) => ac + `<h1>${cv}</h1>`, '');
      const filePath = './files.html';

      // call the function that listFiles supplied as an argument to readdir
      fs.readdir.mock.calls[0][1](undefined, files);
      expect(fs.writeFile.mock.calls.length).toEqual(1);
      expect(fs.writeFile.mock.calls[0].slice(0, 2)).toEqual([
        filePath,
        fileData,
      ]);
    });
  });

  describe('throws errors', () => {
    beforeEach(() => {
      fs.writeFile.mockClear();
      fs.readdir.mockClear();
      listFiles();
    });

    test('when encountering an error reading the current directory', () => {
      const err = 'readdir error!';
      const shouldThrow = () => fs.readdir.mock.calls[0][1](err, []);
      expect(shouldThrow).toThrow(err);
    });

    test('when encountering an error writing the HTML file', () => {
      const err = 'writeFile error!';

      // call the cb func argument of readdir in order to cause
      // writeFile to be called
      fs.readdir.mock.calls[0][1](undefined, []);

      // verify that writeFile throws an error when it's called with one
      const shouldThrow = () => fs.writeFile.mock.calls[0][2](err);
      expect(shouldThrow).toThrow(err);
    });
  });
});
