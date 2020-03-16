# Lesson: JS 0 - Foundations

## Overview

### Numbers Math

- Division: this subsection is effective since most people have been exposed to division.
- Mod:
  - Students from non-STEM related professions may not be familiar with the modulo operation.
  - Recommendation: briefly describe the operation as "finding the remainder after division"

## Variables

### Best Practice

Typo: has -> have

> Best practice means that you should **always** practice this habit because all good software engineers ~~has~~ have this habit.

#### const

Typo: that -> when

> `const` stands for constant. Use `const` to declare a variable ~~that~~ when you never plan to change its value, like the following example:

#### let

Typo: that -> and

> If you need to declare a variable ~~that~~ and you might need to change its value later, you should use let.

## Functions

This subsection should be a sibling, not a child of the Truthy/Falsey subsection in the table of contents

### Writing an Arrow Function

Indentation should be fixed for the `makeBasket` example.

### More Arrow Functions

> Arrow functions are the most important concept in JavaScript, so here are more examples.

Are arrow functions really the most important concept in JavaScript?

> If a function does not return anything, it returns `undefined`, which is a system keyword. `undefined` is falsey.

`undefined` is a primitive value, not a reserved keyword (see [ECMA-262](https://tc39.es/ecma262/#sec-keywords-and-reserved-words)).

### Functions with Conditional Behavior

#### Exercises

> 2. Write a function called sumOrTen that takes in 2 numbers. It should return 10 if both numbers are bigger than 10; otherwise it should just add them.

Consider the change: ~~otherwise it should just add them~~ => otherwise it should return their sum.
