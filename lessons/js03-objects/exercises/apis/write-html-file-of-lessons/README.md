# Write HTML File of Lessons

## Goal

Write a function called `writeHtmlLessons` that sends a request to https://c0d3.com/api/lessons and then write the titles to an HTML file.

## Examples

```js
// writes a file named lessons.html to the current directory
writeHtmlLessons();
```

## Signature

- Parameters: `callback`: function to be called when lessons have been logged, used for testing
- Returns: `undefined`
- Side-effects:

  - Makes HTTP requests
  - Writes file

- Dependencies: `request`, `fs.writeFile`

## Explanation

- Call `request` with the following arguments:

  - URL: https://c0d3.com/api/lessons
  - Callback:

    - Goal: parse response data and log lesson properties to console
    - Signature:

      - Parameters:

        - `error`: error object or string?
        - `response`: object containing response
        - `body`: text of response body

      - Returns: `undefined`
      - Side-effects:

        - Makes HTTP requests
        - Writes to file system

    - Explanation:

      - If `error` is truthy, log it to the console and exit
      - Otherwise, parse `body` and create a JavaScript value (array)
      - Create a string of HTML containing `h1` elements for each lesson title
      - Write the string into a file named `lessons.html` in the current directory
      - Call `callback` (for testing)

## [Code](index.js)

## [Test](index.test.js)
