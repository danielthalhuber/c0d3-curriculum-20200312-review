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
