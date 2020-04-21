# Array Tired For Each

## Goal

Add a prototype method to `Array` called `tiredForEach` that takes a function and a number, and then calls it for each element in the array, passing it the value and index. If `tiredForEach` is called again before the given number of millisecond has elapsed, the function will log "too tired... try again later...".

## Examples

```js
const a = ['chinese', 'african', 'korean'];
const callback = (e, i) => {
  console.log(e + i);
};

/*
  logs:
  chinese0
  african1
  korean2
*/
a.tiredForEach(callback, 180);

// logs: too tired... try again later...
a.tiredForEach(callback, 180);

/*
  after 190, logs:
  chinese0
  african1
  korean2
*/
setTimeout(() => a.tiredForEach(callback, 180), 190);
```

## Signature

- Parameters:

  - `fun`: function to call with each element value and index
  - `delay`: number of milliseconds to be tired after calling `fun` for each element

- Returns: `undefined`
- Side-effects:

  - Logs to the console
  - Sets timeouts

## Explanation

- If either argument is undefined, return/stop
- If the array does not have the property `tired`, add and assign it the value of `false`
- If the `tired` property is `true` log `'too tired... try again later...'` and then return
- Set `tired` to `true`
- Set a timeout to set the `tired` property back to `false` after the given `delay`
- Call `forEach` on the array, using `fun` as the callback

## [Code](index.js)

## [Test](index.test.js)
