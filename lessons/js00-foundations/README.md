# Lesson: JS 0 - Foundations

## Overview

### Numbers Math

- [x] Division: this subsection is effective since most people have been exposed to division.
- [x] Mod:
  - [x] Students from non-STEM related professions may not be familiar with the modulo operation.
  - [x] Recommendation: briefly describe the operation as "finding the remainder after division"

## Variables

### Best Practice

- [x] Typo: has -> have

  > Best practice means that you should **always** practice this habit because all good software engineers ~~has~~ have this habit.

#### const

- [x] Typo: that -> when

  > `const` stands for constant. Use `const` to declare a variable ~~that~~ when you never plan to change its value, like the following example:

#### let

- [x] Typo: that -> and

  > If you need to declare a variable ~~that~~ and you might need to change its value later, you should use let.

## Functions

- [x] This subsection should be a sibling, not a child of the Truthy/Falsey subsection in the table of contents

### Writing an Arrow Function

- [x] Indentation should be fixed for the `makeBasket` example.
- [ ] Consider adding a short section on concise body arrow functions.

### More Arrow Functions

- [ ] Why are arrow functions the most important concept in JavaScript?

  > Arrow functions are the most important concept in JavaScript, so here are more examples.

- [x] `undefined` is a primitive value, not a reserved keyword (see [ECMA-262](https://tc39.es/ecma262/#sec-keywords-and-reserved-words)).

  > If a function does not return anything, it returns `undefined`, which is a system keyword. `undefined` is falsey.

### Functions with Conditional Behavior

#### Exercises

- [x] Consider the change: ~~otherwise it should just add them~~ => otherwise it should return their sum.

  > 2. Write a function called sumOrTen that takes in 2 numbers. It should return 10 if both numbers are bigger than 10; otherwise it should just add them.

## Lesson Challenges

- [Solutions](./challenges/README.md)

### Solving Challenges

- [x] Step 3 is performed with a web browser. Consider changing the wording of this note:

  > Note: Except for step 4 (open and editing the file), all the commands should be run in the terminal

  To something like this:

  > Note: except for steps 3 and 4, ...

  Or:

  > Note: the majority of these commands should be run in the terminal
