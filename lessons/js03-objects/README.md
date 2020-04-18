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

- Data structure where items have keys and values
- Access properties with:

  - `objectName.propertyName`
  - `objectName['propertyName']`
  - `objectName[variableWithPropertyNameValue]`

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
