# Dynamic Option Generator

## Goal

Create a UI for a dynamic `select` `option` generator. The user should be able to:

- Type the name/title of the option in an input field
- Add the option to the list by clicking an add button
- Select options from the list

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with text: Add Option
   - `div` with the following children:

     - `input:text`
     - `button` with text: Add

   - `select`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `textInput`: immutable, the `input:text` element
     - `addButton`: immutable, the `button` element
     - `select`: immutable, the `select` element

   - Create the following function:

     - `addOption`

       - Goal: add user defined option to `select`
       - Signature: no parameters, returns `undefined`, side-effect: updates UI
       - Explanation:

         - Get the text from `input`
         - Get the `innerHTML` from `select`
         - Append an option element to the `innerHTML` of `select`
         - Clear the text from `input`

   - Add `addOption` as a click event listener of `addButton`

## [Code](index.html)
