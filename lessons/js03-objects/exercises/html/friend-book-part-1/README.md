# Friend Age Notebook Part 1

## Goal

Create a UI for keeping track of friends names and ages.

The user should be able to:

- Add a new friend's name and age using input fields and a button
- View a list of friend's names and ages

> [Demo](demo.html)

## Process

1. Create an HTML document
2. Add the following elements to the `body`:

   - `h1` with text: Friend List
   - `label` with:

     - Text: Name
     - Child: `input.new-name:text`

   - `label` with:

     - Text: Age
     - Child: `input.new-age:text`

   - `button` with text: Add
   - `div`
   - `script`

3. In the `script`:

   - Create the following state variables:

     - `friends`: immutable, array of friends
     - `newName`: immutable, the element `.new-name`
     - `newAge`: immutable, the element `.new-age`
     - `addButton`: immutable, the element `button`
     - `friendList`: immutable, the element `div`

   - Create the following function:

     - `addFriend`

       - Goal: add new friend using with the given name and age
       - Signature: parameters: none, returns: `undefined`, side-effect: state
       - Explanation: push a new array into friends containing the given name and age

     - `renderFriendList`

       - Goal: render a list of friend names and ages
       - Signature: parameters: none, returns: `undefined`, side-effect: updates UI
       - Explanation:

         - Set the `innerHTML` of `friendList` to a string containing `div`s for each friend where the friend names in an `h2` and the age in an `h3`

   - Add a click event listener to `addButton` that:

     - Returns alert if one or both inputs are empty
     - Otherwise:

       - Calls `addFriend`
       - Clears the inputs
       - Calls `renderFriendList`

   - Call `renderFriendList`

## [Code](index.html)
