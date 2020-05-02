# Write HTML File of Lessons (with Fetch)

## Goal

Write a function called `writeHtmlLessons` that sends a request to https://c0d3.com/api/lessons and then write the titles to an HTML file.

## Examples

```js
// writes a file named lessons.html to the current directory
writeHtmlLessons();
```

## Signature

- Parameters: none
- Returns: Promise
- Side-effects:

  - Makes HTTP requests
  - Writes to the filesystem

- Dependencies: `node-fetch`, `fs.promises.writeFile`

## Explanation

- Send a request to the lessons API endpoint: https://c0d3.com/api/lessons
- If the request is fulfilled:

  - Parse the response `body` and create a JavaScript value (array)
  - Create a string of `h1` tags containing each lesson title
  - Write the string to a file in the current directory named `lessons.html`

- If the request is rejected, throw an error

## [Code](index.js)

## [Test](index.test.js)
