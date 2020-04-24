# List Files

## Goal

Write a function called `listFiles` that reads the files in the current directory and creates a new file named `files.html` in the same directory that lists the file names with `h1` tags.

## Examples

```js
/*
  suppose the current directory contains the following files:
  index.js
  index.test.js
  README.md
 */

/*
  creates a file named files.html in the current directory with the contents:
  <h1>index.js</h1><h1>index.test.js</h1><h1>README.md</h1>
*/
listFiles();
```

## Signature

- Parameters: none
- Returns: `undefined`
- Side-effects:

  - Writes files to the current directory

- Dependencies: `fs.readdir`, `fs.writeFile`

## Explanation

- Call `fs.readfile` with the following arguments:

  - Path: `./`
  - Callback: a function that calls creates the HTML string from the `files` parameter and then calls `fs.writeFile` to write the file named `files.html` to the current directory

## [Code](index.js)

## [Test](index.test.js)
