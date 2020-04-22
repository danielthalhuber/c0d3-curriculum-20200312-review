# JS3 - Objects

## [Preflight](preflight/README.md)

## Overview

- [x] Redundant "after this lesson" and "once you've finished this lesson" in the same sentence:

  > After this lesson, you will have learned everything you need to solve the algorithm section of a coding interview and can start practicing the problems on [leetCode](https://leetcode.com/) once you've finished this lesson.

## HTML

### Event Listener

Recall that in the previous lesson, many of the examples used the [onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) property to set click event listeners. This is not considered a best practice, since it limits the number of listeners that can be assigned to an element. The [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method is a more flexible option.

### Elements

A `select` element represents a control that provides a menu of options. The options are represented by `option` elements nested in a `select` element.

```html
<select>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
</select>
```

### JSON

- JSON: JavaScript Object Notation
- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) is also the name of one of JavaScript's standard objects that provides methods for parsing JSON and converting values to JSON

#### JSON.stringify

- [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): method that converts a JavaScript object or value to a JSON string

#### JSON.parse

- [JSON.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): method that parses a JSON string, constructing the JavaScript value of object described by the string

### Web API

#### Window.localStorage

[Window.localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage):

- Read-only property that provides access to a [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) object for the Document's origin
- Its data:

  - Is stored across browser sessions
  - Has no expiration time
  - Is specific to the protocol of the page (refer to origin)

[Storage.setItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem):

- Method used to add or update a storage item (key value pair)
- Parameters:

  - `key`: string containing the name of the item
  - `value`: string containing the value of the item

- Returns: `undefined`

[Storage.removeItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem):

- Method used to remove a storage item
- Parameters:

  - `key`: string name of the item to remove

- Returns: `undefined`

[Storage.getItem](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem):

- Method used to return a storage item's value
- Parameters:

  - `key`: string containing the name of the item

- Returns: string or `null` if the key does not exist

[Storage.clear](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear):

- Method used to clear all keys in the Storage object
- Parameters: none
- Returns: `undefined`

#### [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

- [x] Should be a child of Browser Functions (Web API)
- Recall that this method returns [a static NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList#Live_vs._Static_NodeLists), which is similar to an array of Elements.

### [Exercises](exercises/html/README.md)

## Objects

- Objects are collections of named properties with values
- The general term for the name of a property is `key`

  - `objectName.key`
  - `objectName['key']`
  - `objectName[variable]`, where `variable` has been assigned the value of the property name or key

  ```js
  const student = {
    first: 'Harry',
    last: 'Potter',
    age: 25,
  };

  const firstName = student['first']; // firstName has the value 'Harry'

  const student2 = student;
  student2['name'] = 'last';
  // what is student2?
  // what is student?

  // answer:
  // student2 is student is { first: 'Harry', last: 'Potter', age: 25, name: last }

  // The benefit of using [] for getting values is that you can use variables as keys.
  student2[student2.name] = 'Weasley';
  // what is student2?
  // what is student?

  // answer:
  // student is student2 is { first: 'Harry', last: 'Weasley', age: 25, name: last }
  ```

- Like arrays, objects are a non-primitive data type:

  ```js
  const star = { name: 'Tarzan' };
  const star2 = star;
  star2['friend'] = star;
  star2['friend']['lover'] = 'Jane';
  // what is star2?
  // what is star?

  // answer:
  // star is star2 is { name: 'Tarzan', friend: star, lover: 'Jane' }

  star['name'] = 'Sarah';
  // what is star2?
  // what is star?

  // answer:
  // star is star2 is { name: 'Sarah', friend: star, lover: 'Jane' }

  const allStars = [star, star2];
  allStars[0]['lover'] = allStars[1]['name'];
  // what is star2?
  // what is star?
  // what is allStars?

  // answer:
  // star is star2 is { name: 'Sarah', friend: star, lover: 'Sarah' }
  // allStars is [star, star2]
  ```

- Values can be anything:

  ```js
  const snacks = {
    nutella: () => {
      return 200;
    },
    pixyStix: () => {
      return 9;
    },
    lays: () => {
      return 135;
    },
  };
  let calories = snacks['nutella'](); // what is calories?

  // answer: calories is 200

  calories = snacks['pixyStix'](); // what is calories?

  // answer: calories is 9

  calories = snacks['lays'](); // what is calories?

  // answer: calories is 135
  ```

- Another example with functions:

  ```js
  // Problem 1:
  const magician = {
    perform: () => {
      return magician;
    },
  };
  const houdini = magician.perform().perform(); // what is houdini?
  const same = magician === houdini; // what is same?

  // answer 1:
  // houdini is magician
  // same is true

  /*
    Problem 2: Create a prepareStage object with a then property so the following code
    will not cause an error.
  
    prepareStage.then().then().then();
  */

  // answer 2:
  const prepareStage = {
    then: () => prepareStage,
  };

  /*
    alternate answer 2:
    const prepareStage = {
      then: function ()
        return this;
      },
    };
  
  */

  /*
    Problem 3: Create the prepareStage object with a then property that
    console.logs each input: Should log Squirtle, Wartortle, Blastoise
  
    prepareStage.then('Squirtle').then('Wartortle').then('Blastoise');
  */

  // answer 3:
  const prepareStage = {
    then: function (arg) {
      console.log(arg);
      return this;
    },
  };

  /*
    Problem 4: Create the prepareStage object with a then property that
     executes its function argument: Should log Abracadabra! 3 times
  
    const performMagic = () => {
      console.log('Abracadabra!');
    };
  
    prepareStage.then(performMagic).then(performMagic).then(performMagic);
  */

  // answer 4:
  const prepareStage = {
    then: function (arg) {
      arg();
      return this;
    },
  };
  ```

### [Exercises](exercises/objects/README.md)

## Object Helpers

There are several useful helper functions for working with objects:

- `Object.keys`: takes an object and returns an array of its keys
- `Object.values`: takes an object and returns an array of its values
- `Object.entries`: takes an object and returns an array of property/entry arrays, each containing a key and value
- `Object.prototype.hasOwnProperty`: takes a string and returns true if the object has a key equal to the string
- `delete` operator: removes a property from an object

  ```js
  const obj = { one: 1, two: 2 };

  // result: object will become { two: 2 }
  delete obj.one;
  ```

### [Exercises](exercises/helpers/README.md)

## Prototype Inheritance

- [ ] This section should develop the concept of prototypes. The lack of definition of the term prototype combined with the use of native prototypes will drive confusion in many students.

### Prototype

- Every object has a private reference to a _prototype_
- A prototype is an object to which property searches can be delegated
  - Example:
    - Search for the property `isAwesome` on object `a` using dot notation: `a.isAwesome`
    - If the `isAwesome` property cannot be found in `a`, then `a`'s prototype `b` can be searched
    - If the `isAwesome` property cannot be found in `b`, then `b`'s prototype `c` can be searched, and so on, up the _prototype chain_

### Prototype Methods

- A prototype method is a property with a function value that exists in one of the objects in a prototype chain
- A prototype function is a convenient and _memory efficient_ way to add methods to constructed objects
- Note that searching for prototype methods can be _time inefficient_, especially when the method does not exist and the entire chain must be searched
- Caution:

  - Arrow functions have limited use as prototype methods due to the fact that they cannot have their own `this` binding. For this reason, it's usually better to use a regular function expression instead of an arrow function expression for defining prototype methods (or methods in general).
  - Adding methods to native prototypes (AKA monkey patching) is considered a bad practice since it breaks encapsulation and can cause unexpected behavior.

Example:

```js
// Create an object
const bob = {
  name: 'Bob',
  age: 400,
};

/*
 Observe that bob is an instance of Object. This means that the prototype of
 the Object function is in the prototype chain of bob
 */
// logs true
console.log(bob instanceof Object);

/*
 In fact, bob's prototype chain is:
 bob --> Object.prototype --> null
 */
const bobsPrototype = Object.getPrototypeOf(bob);
// logs true
console.log(bobsPrototype === Object.prototype);
// logs true
console.log(Object.getPrototypeOf(bobsPrototype) === null);

/*
 So if we add a prototype method to Object (i.e. add a method to the prototype
 of the the Object constructor, and yes this is bad practice but it helps us
 illustrate the principle of inheritance), then the method will then be
 available to bob, since this prototype is somewhere in bob's prototype chain
 */
Object.prototype.incrementCount = function () {
  if (!this.hasOwnProperty(count)) this.count = 0;
  this.count += 1;
};

/*
 Calling the new method on bob causes the JS engine to search bob, and
 ultimately bob's prototype chain to find the method. When the property is
 found and called, it adds a property to this (bob)
 */
// bob is now { name: "Bob", age: 400, count: 1 }
bob.incrementCount();
```

#### The new Operator

- The `new` operator creates an instance of an object type (as defined by a constructor function)

  - Creates an empty object
  - Assigns a prototype to the empty object. The assigned value is the prototype property of the object type (constructor function).
  - Calls the constructor function with `this` bound to the newly created empty object
  - Returns:

    - If the constructor returns a non-null/false/primitive value, then this value is used
    - Otherwise, the newly created object

Example using `new`:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const me = new Person('Joe', 24);
```

Example without using `new`:

```js
function Person(name, age) {
  // create empty object, assign prototype
  const this = Object.create(Person.prototype);

  this.name = name;
  this.age = age;

  // return the new object
  return this;
}

const me = Person('Joe', 24);
```

### [Exercises](exercises/prototype/README.md)

## Arrays as Objects

Newsflash: arrays (like almost everything else in JavaScript) are objects too. Now back to more exercises...

### [Exercises](exercises/arrays-as-objects/README.md)

## Function vs. Fat Arrow

Arrow function expressions differ from regular function expressions and function declarations in that they don't have their own bindings to the `this`, `arguments`, `super`, or `new.target` keywords. Without these bindings, they cannot be used as constructors, and they're not always the best choice for methods.

The most significant of these differences is `this`.

For regular functions, `this` is:

- For simple calls:

  - not in strict mode: the global object
  - in strict mode: `undefined`

- For calls using `call` or `apply`: the value of `this` passed to `call` or `apply`
- For functions created using using the `bind` method: the value supplied as an argument to `bind`
- As an object method: the object that the method was called on
- For constructor calls using `new`: the object being constructed
- As a DOM event handler or inline event handler: the element on which the listener is placed

For arrow functions, `this` is the context in which it is created.

### Examples

```js
setTimeout(function () {
  // What is this?
  console.log(this);
});

// answer: this is the global object
```

```js
function Person(age) {
  this.age = age;
}
Person.complain = function () {
  if (this.age >= 100) {
    return "I'm getting way too old for these JavaScript exercises";
  }
  return "I'm not old enough";
};

const yoda = new Person(419);

// what is logged?
console.log(yoda.complain());

/*
  answer:

  - a new person object is constructed with age 419
  - the complain method is called on the new person object
  - the person object does not have a complain method, so its value is undefined
  - recall that complain is a static method of Person
  - attempting to call undefined throes a type error: not a function
  - so nothing is logged!
 */
```

```js
function Person(age) {
  this.age = age;
}
Person.prototype.complain = () => {
  if (this.age >= 100) {
    return "I'm getting way too old for these JavaScript exercises";
  }
  return "I'm not old enough";
};

const yoda = new Person(419);

// what is logged?
console.log(yoda.complain());

/*
  answer:

  - a new person object is constructed with age 419
  - the complain method is called on the new person object
  - the object does not have a complain method
  - so the object's prototype chain is searched
  - the complain method is located on its prototype and it is called
  - this is the global object since the method uses an arrow function
  - the method returns "I'm not old enough" since this.age is probably undefined
 */
```

```js
const arr = [1, 2, 3];
Array.prototype.delayedLast = function () {
  setTimeout(() => {
    console.log(this[this.length - 1]);
  }, 1000);
};

// what is logged?
arr.delayedLast(); // After 1000ms,
// the browser will print out 3. It works!

/*
  answer:

  - console.log is called within an arrow function
  - so the value of this passed to console.log is bound to the context in which is was created (lexical context)
  - the value of this bound to the regular function
  - the regular function is called as a method of the arr object, so this is bound to arr
  - when console.log is called, this is then arr
 */
```

## Import/Export

- Export from a module file by adding a value to `module.exports`
- Import the exported value(s) in another file using `require` with a path to the module file

Example:

```js
// dir/helper1.js
const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong',
};

module.exports = {
  data: info,
  getData: (key) => {
    return info[key];
  },
};
```

```js
// dir/helper2.js
module.exports = ['ironman', 'strange', 'thor', 'spiderman', 'hulk'];
```

```js
// dir/solution.js
// importedObject takes the value of module.exports, which is an object
const myObj = require('./helper1.js');

// importedArray takes the value of module.exports, which is an array
const myArr = require('./helper2.js');

// what is result?
const result = myArr.filter((e) => {
  return myObj.getData(e);
});

console.log(result);

// answer:
// result is ['ironman', 'spiderman', 'hulk']
```

### Exercises

1. Create 2 files, `./myObj.js`, `./myFun.js`, that export an object and a function respectively.

2. Create 1 file that imports the files created above and does something with the imported object and function. Make sure to `console.log` your output to make sure your functions are called correctly.

> These are good exercises, but I'm going to skip them since I've been importing and exporting extensively throughout the curriculum.

## Libraries

### [Exercises](exercises/libraries/README.md)
