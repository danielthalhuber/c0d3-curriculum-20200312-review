# JS2 - Arrays

## Preflight

This section has the reader create an npm package with the single dependency `jest`. The package contains two files:

- `prefilght.js`: contains solutions to exercises in the Preflight section
- `preflight.test.js`: contains tests for the solutions in `preflight.js`

I will modify this structure slightly so that the package has the following structure:

- `README.md`: provides descriptions and links to code and test files for each solution
- For each solution:
  - `solution-name.js`: file containing solution code for an exercise
  - `solution-name.test.js`: file containing test code for an exercise

[Solutions](preflight/README.md)

## Overview

This lesson has two parts:

- HTML
- Arrays

## HTML/JS

- Refer to the [example file](examples/div-and-inner-props.html)
- Recommended changes:

  - Use `Node.textContent` over `HTMLElement.innerText` for efficiency (see [MDN article](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent))
  - When referring to methods of `HTMLElement` and `Node`, it might be helpful to mention that these are part of the web/browser API, not JavaScript.

- [Exercises](exercises/html/README.md)