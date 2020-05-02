# Write HTML File of 20 Pokemon (with Fetch)

## Goal

Write a function called `writeHtml20Pokemon` that sends a request to https://pokeapi.co/api/v2/pokemon/ and then write the Pokemon names to an HTML file.

## Examples

```js
// writes a file named names.html to the current directory
writeHtml20Pokemon();
```

## Signature

- Parameters: none
- Returns: Promise
- Side-effects:

  - Makes HTTP requests
  - Writes to filesystem

- Dependencies: `request`, `fs.promises.writeFile`

## Explanation

- Request Pokemon data from the API endpoint: https://pokeapi.co/api/v2/pokemon/

  - If the request is fulfilled:

    - Parse `body` and create a JavaScript value (array)
    - Create a string of HTML containing `h1` elements for each Pokemon name
    - Write the string into a file named `names.html` in the current directory

  - If the request is rejected, throw an `error`

## [Code](index.js)

## [Test](index.test.js)
