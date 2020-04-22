# Make Files

## Goal

Write a function called `makeFiles` that takes in a number and creates number + 1 files using `fs.writeFile`.

- The filenames should be named as follows:

  `trainer0.txt`, `trainer1.txt`, `trainer2.txt`, ... `trainerX.txt`.

- Each file should contain the text `Gotta catch 'em all`

## Examples

```js
// creates the files ./trainer0.txt and ./trainer1.txt with the content:
// Gotta catch 'em all

makeFiles(1);
```

## Signature

- Parameters:

  - `number`: count of files (less one) to be created

- Returns: `undefined`
- Side-effects:

  - Writes files to the current directory

- Dependencies: `fs.writeFile`

## Explanation

- Base: if `number` is less than 0, return/stop
- Recursive:

  - Call `fs.writeFile` with the following arguments:

    - File: `./trainer${number}.txt`
    - Data: `"Gotta catch 'em all"`
    - Callback: a function that calls `makeFiles`, decrementing `number` by 1

## [Code](index.js)

## [Test](index.test.js)
