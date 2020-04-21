# Array Get Most Common

## Goal

Add a prototype method to `Array` called `getMostCommon` that returns the most common element in an array.

## Examples

```js
// returns 7
[9, 8, 7, 8, 7, 7, 7].getMostCommon();

// returns "Batman"
['Batman', 8, 7, 'Batman', 'Robin'].getMostCommon();
```

## Signature

- Parameters: none
- Returns: undetermined

## Explanation

- If the array has length 0, return/stop
- Declare a an object `max` with properties:

  - `key`: the value of the first element in the array
  - `count`: 1

- Declare `curr` and assign it a copy of `max`

- Declare a map `counts` and set the first entry to:

  - key: `max.value`
  - value: `max.count`

- Loop over the rest of the array (starting at index 1)

  - For each element:

    - If `counts` has a key equal to the element value:

      - Increment its value by 1

    - Otherwise add a new entry with:

      - key: element value
      - value: 1

    - Set `cur.key` and `curr.value` to the current element value and it's count
    - If `curr.value` is greater than `max.value`, assign the `key` and `value` of `curr` to `max`

- Return `max.value`

## [Code](index.js)

## [Test](index.test.js)
