# Write HTML File of 20 Pokemon

## Goal

Write a function called `writeHtml20Pokemon` that sends a request to https://pokeapi.co/api/v2/pokemon/ and then write the Pokemon names to an HTML file.

## Examples

```js
// writes a file named names.html to the current directory
writeHtml20Pokemon();
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

  - URL: https://pokeapi.co/api/v2/pokemon/
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
        - Logs to the console

    - Explanation:

      - If `error` is truthy, log it to the console and exit
      - Otherwise, parse `body` and create a JavaScript value (array)
      - Create a string of HTML containing `h1` elements for each Pokemon name
      - Write the string into a file named `names.html` in the current directory
      - Call `callback` (for testing)

## [Code](index.js)

## [Test](index.test.js)
