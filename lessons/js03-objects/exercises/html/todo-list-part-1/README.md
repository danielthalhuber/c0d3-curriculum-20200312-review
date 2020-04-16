# Todo List Part 1

## Goal

Create a UI for a Simple todo list.

The user should be able to:

- Type the text of the todo item in an input field
- Add the todo item to the list by clicking an add button
- View the list of todo items
- Delete a todo item by clicking on it in the list

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with text: Todo List
   - `div` with the following children:

     - `input:text`
     - `button` with text: Add

   - `div.todoList`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `todoItems`: mutable, an array of todo items
     - `textInput`: immutable, the `input:text` element
     - `addButton`: immutable, the `button` element
     - `todoList`: immutable, the `div.todoList` element

   - Create the following function:

     - `addTodo`

       - Goal: add user defined todo item to state
       - Signature: no parameters, returns `undefined`, side-effect: updates UI and state
       - Explanation:

         - Get the text from `input`
         - Append the text to `todoItems`
         - Clear the text from `input`

     - `deleteTodo`

       - Goal: remove the specified todo item from state
       - Signature:
         - Parameters: `index`: number representing the index of the todo item in `todoItems`
         - Returns: `undefined`
       - Explanation: splice the specified element out of `todoItems`

   - `renderTodos`

     - Goal: render the todo item in the UI
     - Signature: no parameters, returns `undefined`, side-effect: updates UI
     - Explanation:

       - Create a string of `h2` elements from `todoItems` representing the todo items in the UI
       - Set the `innerHTML` of `todoList` to this string of string of `h2` elements
       - Iterate over the `h2` children of `todoList` and add a click event listener that calls `deleteTodos` with the index of the `h2` element, and then calls `renderTodos`

   - Add a click event listener to `addButton` that calls `addTodo` and then calls `renderTodo`
   - Call `renderTodos`

## [Code](index.html)
