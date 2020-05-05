# Write HTML File of 20 Pokemon Names and Images

## Goal

Create a JavaScript file that writes an HTML file to the current directory that displays each pokemon's name and image.

- There cannot be any JavaScript in the generated html file
- The API endpoint for Pokemon data: https://pokeapi.co/api/v2/pokemon/
- The response data contains URLs for the API endpoints for each Pokemon's details
- The detail response contains a `sprites` property that provides image URLs

## Examples

```js
const { createPokemonHtml } = require('./');
// writes a file named 9.html to the current directory with names and images
// of 20 Pokemon
createPokemonHtml('9.html');
```

## Signature

- Parameters: `fileName`: name of HTML file to write to current directory
- Returns: Promise
- Side-effects:

  - Makes HTTP requests
  - Writes to filesystem

- Dependencies: `node-fetch`, `fs.promises.writeFile`

## Explanation

- Request Pokemon data from the API endpoint: https://pokeapi.co/api/v2/pokemon/

  - If the request is fulfilled:

    - Parse `body` and create a JavaScript value (array)
    - Create a string of HTML containing, for each Pokemon:

      - `h1` element containing the Pokemon's name
      - `img` element to display the Pokemon's image

    - Write the string into a file named `fileName` in the current directory

  - If the request is rejected, throw an `error`

## [Code](index.js)

## [Test](index.test.js)
