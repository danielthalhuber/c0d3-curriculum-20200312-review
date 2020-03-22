# Lesson: JS1 - HTML & Functions

## HTML

### How to Follow Along

Consider changing quote to strong/bold:

> When you open the file (double click or right click → open with browser), you should see a Welcome! heading and an input box. The large Welcome! text and the input box that the browser displays from the `h1` and `input` ~~`elements`~~ **elements**.

Grammar, add the article "An":

> HTML element is everything from the opening tag to the closing tag:

> An HTML element is everything from the opening tag to the closing tag:

It might be useful to reframe (or possibly summarize) the description of tags and elements from a top-down perspective:

- Elements are the parts that make up the HTML document
- Elements are composed of tags and enclosed content
- All elements begin with an opening tag
- Some elements are only composed of an opening tag
- Most elements have closing tags as well as content enclosed between the opening and closing tags

### HTML Example

> Create a new HTML file, call it `challenge1.html`, open it in your browser, and try to match each **tag** instruction with its corresponding **element**!

What does it mean to "match each **tag** instruction with its corresponding **element**"? There's nothing to do here but type the code into the file and view it in a browser. It might make more sense to describe the activity as something like, "add the following code to the file, save the file, and view it in your browser".

Consider adding "in":

> (Note that we're getting you started on a later exercise, **in** which you will write HTML instructions for Challenge 1 from the previous lesson.)

### Browser JavaScript

Since we're adding a `script` element (opening and closing tags with enclosed content), we should say _element_ instead of _tag_:

> This is called **dynamic** behavior. To get started, we'll add a `<script>` **~~tag~~ element**, which tells the browser to treat the text inside as JavaScript and run the code.

### Getting HTML Elements

Grammar, plural "browsers":

> `document.querySelector` is another common javascript method (or function) supported by most browser**s**.

Grammar recommendations:

- Add article "the", i.e. "we ran **the** `document.querySelector` method"
- Add comma and the article "an", i.e. "in this case, **an** `input` element"
- Remove redundant "in", i.e. "we passed ~~in~~ `'input'`"
- Move final period from before to after final closing parentheses

> In the example above, we ran **the** `document.querySelector` method (or function) and passed ~~in~~ `'input'` as the argument. This method searches through all the elements on the page and returns the first element that matches the specified selectors (in this case **an** 'input' element ~~.~~)**.**

### Element Properties

#### Value

In this subsection, we return to `challenge1.html` and leverage the class attributes added in a previous example. The student might not have made these changes to their `challenge1.html` file.

In such cases it would be useful to remind the student to add the classes before proceeding with this section. Alternatively, the student could be instructed to do this work in the previous section.

### Exercises

1. [Create an HTML page](./html-ex01-create-an-html-page.html)
2. [Create a UI for JS0 Challenge 1](./html-ex02-ui-for-js00c01.html)
3. [Create a UI for JS0 Challenge 3](./html-ex03-ui-for-js00c03.html)
4. [Create a UI for JS0 Challenge 7](./html-ex04-ui-for-js00c07.html)
5. [Create a UI for JS0 Challenge 8](./html-ex05-ui-for-js00c08.html)
6. [Create a UI for JS0 Challenge 9](./html-ex06-ui-for-js00c09.html)

## Interviewing

Recommended process for solving problems in interviews:

1. **Examples**: provide 3 examples that describe the output or behavior produced using specific inputs, including boundary cases (negative numbers, 0, large numbers, empty strings, etc.).
2. **Signatures**: describe the [signature](https://developer.mozilla.org/en-US/docs/Glossary/Signature/Function)s of any functions involved in the solution.
3. **Explain the process**: describe any requirements that you need, and how they will be used to produce the desired result.
4. **Write the code**: follow the process you described and translate it into code.
5. **Test**: go through the code, step by step, using the examples previously identified, and verify that your solution works as expected.

## Closure

Nice simple definition of a closure:

> An inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.

### Example 1

Nice example that illustrates the concept of closure created by a function:

```js
const solution = () => {
  let counter = 0;

  return () => {
    counter = counter + 1;
    if (counter < 3) {
      return 0;
    }

    return counter;
  };
};

const arya = solution();
let res = arya(); // 1: what is res?
const sansa = solution();

res = arya() + sansa(); // 2: what is res?
res = arya() + sansa(); // 3: what is res?
res = arya() + sansa(); // 4: what is res?
res = arya() + sansa(); // 5: what is res?
res = arya() + sansa(); // 6: what is res?
```

#### Answer

1: what is res?

- `solution()` is assigned to `arya`
- `solution()`:

  - Creates a new execution context containing the local variable `counter`
  - > Note: `counter` is local (belongs to this new context) because `let` declares variables with function/block scope, so `counter` does not exist outside the function's local execution context
  - Returns a function in a closure containing the local variable `counter`

- `arya()` is assigned to `res`
- `arya()`:
  - Increments `counter` from 0 to 1
  - Returns 0 since `counter < 3`
- So `res` is assigned the value 0

2: what is res?

- `solution()` is assigned to `sansa`
- `solution()`:
  - Creates a new execution context containing the local variable `counter`
  - > Note: `counter` is local (belongs to this new context) because `let` declares variables with function/block scope, so `counter` does not exist outside the function's local execution context
  - Returns a function in a closure containing the local variable `counter`
- `arya()`:
  - Increments `counter` from 1 to 2
  - Returns 0 since `counter < 3`
- `sansa()`:
  - Increments `counter` from 0 to 1
  - Returns 0 since `counter < 3`
- So `res` is assigned the value 0

3: what is res?

- `arya()`:
  - Increments `counter` from 2 to 3
  - Returns 3 since `!(counter < 3`
- `sansa()`:
  - Increments `counter` from 1 to 2
  - Returns 0 since `counter < 3`
- So `res` is assigned the value 3

4: what is res?

- `arya()`:
  - Increments `counter` from 3 to 4
  - Returns 4 since `!(counter < 3`
- `sansa()`:
  - Increments `counter` from 2 to 3
  - Returns 3 since `!(counter < 3)`
- So `res` is assigned the value 7

5: what is res?

- Following the pattern described above:
  - `arya()` returns 5
  - `sansa()` returns 4
- So `res` is assigned the value 9

6: what is res?

- Following the pattern described above:
  - `arya()` returns 6
  - `sansa()` returns 5
- So `res` is assigned the value 11

### Example 2

A slight variation on the example above demonstrates the difference in scope between `var` and `let`. Suppose we declare `counter` using `var` or no keyword at all. How would this change the result?

```js
const solution = () => {
  counter = 0; // or var counter = 0;

  return () => {
    counter = counter + 1;
    if (counter < 3) {
      return 0;
    }

    return counter;
  };
};

const arya = solution();
let res = arya(); // 1: what is res?
const sansa = solution();

res = arya() + sansa(); // 2: what is res?
res = arya() + sansa(); // 3: what is res?
res = arya() + sansa(); // 4: what is res?
res = arya() + sansa(); // 5: what is res?
res = arya() + sansa(); // 6: what is res?
```

#### Answer

1: what is res?

- `solution()` is assigned to `arya`
- `solution()`:

  - Creates a new execution context and declares a global variable `counter`
  - > Note: `counter` is global (belongs to the surrounding script context) because `var` declares variables with global scope, so `counter` is available to the new function's local execution context because it exists in the surrounding/parent execution context
  - Returns a function in a closure containing the global variable `counter`

- `arya()` is assigned to `res`
- `arya()`:
  - Increments `counter` from 0 to 1
  - Returns 0 since `counter < 3`
- So `res` is assigned the value 0

2: what is res?

- `solution()` is assigned to `sansa`
- `solution()`:
  - Creates a new execution context and _assigns a value of 0 to_ the global variable `counter`
  - > Note: since `counter` already exists in the global execution context, `counter = 0` effectively decrements `counter` from 1 to 0
  - Returns a function in a closure containing the global variable `counter`
- `arya()`:
  - Increments `counter` from 0 to 1 (again)
  - Returns 0 since `counter < 3`
- `sansa()`:
  - Increments `counter` from 1 to 2
  - Returns 0 since `counter < 3`
- So `res` is assigned the value 0

3: what is res?

- `arya()`:
  - Increments `counter` from 2 to 3
  - Returns 3 since `!(counter < 3`
- `sansa()`:
  - Increments `counter` from 3 to 4
  - Returns 4 since `!(counter < 3)`
- So `res` is assigned the value 7

4: what is res?

- `arya()`:
  - Increments `counter` from 4 to 5
  - Returns 5 since `!(counter < 3`
- `sansa()`:
  - Increments `counter` from 5 to 6
  - Returns 6 since `!(counter < 3)`
- So `res` is assigned the value 11

5: what is res?

- Following the pattern described above:
  - `arya()` returns 7
  - `sansa()` returns 8
- So `res` is assigned the value 15

6: what is res?

- Following the pattern described above:
  - `arya()` returns 9
  - `sansa()` returns 10
- So `res` is assigned the value 19

### Real Life Use Case

Expanded version of the example given in the book (to push the limits of one liner ridiculousness)

```js
const withLog1 = (msg, fn) => {
  return (...args) => {
    console.log(msg, ...args);
    return fn(...args);
  };
};

const withLog2 = (m, f) => (...a) => !console.log(m, ...a) && fn(...a);

const add = (a, b) => a + b;

withLog1('sum of two numbers', add)(1, 2);

withLog2('sum of two numbers', add)(1, 3);
```

## Recursion

The name `addTo3` seems misleading. Maybe the point is that you need to read the function logic/procedure instead of making assumptions based on its name. Then again, `cumulativeSumTo3` is a little cumbersome.

```js
const addTo3 = (counter = 1, result = 0) => {
  if (counter > 3) return result;

  return addTo3(counter + 1, result + counter);
};

res = addTo3(2); // res has the value 5: 2 + 3
res = addTo3(); // res has the value 6: 1 + 2 + 3
```

### Writing a Recursive Function

Process for writing a recursive function:

1. **Parameters**: determine which variables are needed, and include them as function parameters with default values
2. **Base Case**: write an `if` statement that executes when the function is done iterating
3. **Recursive Case**: write logic to `return` the next iteration

Example: write a function called `sumToMe` that takes in a number and returns the sum of all numbers from 0 to that number.

```js
const sumToMe = (me = 0, counter = 1, result = 0) => {
  // base case
  if (counter > me) return result;

  // recursive case
  return sumToMe(me, counter + 1, result + counter);
};

sumToMe(5); // returns 15: 1 + 2 + 3 + 4 + 5
sumToMe(3); // returns 6: 1 + 2 + 3
```

### Exercises

1. Write a function called `love` that calls `console.log('The things I do for love')` 99 times ([solution](recursion-ex01-love.js)).
2. Write a function called `countTo98` that calls `console.log` once for every number from 0 to 98 ([solution](recursion-ex02-countTo98.js)).
3. Write a function called `countToMe` that `console.log`s every number from 8 to the input number ([solution](recursion-ex03-count-to-me.js)).
4. Write a function called `fizzbuzz` that calls `console.log` for every number from 1 to the input number.
   - The value logged to the console should be:
     - If the number is divisible by 3, log the value `'fizz'`
     - If the number is divisible by 5, log the value `'buzz'`
     - If the number is divisible by 3 and 5, log the value `'fizzbuzz'`
     - Otherwise log the number
   - [solution](recursion-ex04-fizzbuzz.js)
5. Write a function called `numberedHello` that takes a number parameter and returns a string that repeats `'hello'` as many times as the given number ([solution](./recursion-ex05-numbered-hello.js))
6. Write a function called `sumEvens` that adds up all the even numbers from 2 to the given number ([solution](recursion-ex06-sum-evens.js))
7. Write a function called `tryNumRange` that takes in a number and a function and calls the function with every number from 1 to the input number. If any of these return true, return true; if they all return false, return false ([solution](./recursion-ex07-try-num-range.js))
8. Write a function named `fun1` that calls a given function a given number of times ([solution](./recursion-ex08-fun1.js))

## Strings and Letters

- Access a character in a string using square bracket notation with a zero-based index, e.g. `'string'[3] === 'i'`
- The length of a string is stored in its `length` property, e.g. `'str'.length === 3`

### Example

> Note: example uses two different names for the function: `solution` and `logString`

Goal:

- Write a function called `logString` that takes in a string and calls `console.log` with each character in the string.

Examples:

- `logString()` should log nothing
- `logString(' ')` should log a single space
- `logString('abc')` should log the characters a, b, c

Signature:

- Parameters:
  - `str`, public, string with characters to log
  - `i`, private, number corresponding to the current iteration
- Returns: `undefined`
- Side effects: logs to the console

Explanation:

- Starting with `i = 1`
- Base case: if `str` is falsey or `i > str.length`, return
- Recursive case:
  - Call `console.log(str[i - 1])`
  - Return `logSting`, incrementing `i` by 1

Code:

```js
const logString = (str, i = 1) => {
  if (!str || i > str.length) return;

  console.log(str[i - 1]);
  return logString(str, i + 1);
};
```

### Exercises

1. Write a function called `logNonMatching` that logs every character in a string, except for one specified character ([solution](strings-ex01-log-non-matching.js))
2. Write a function called `logFirstX` that logs a given number of characters from the beginning of a string ([solution](strings-ex02-log-first-x.js))
