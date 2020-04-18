const { addKV } = require('./');

describe('addKV', () => {
  describe('adds new property to object', () => {
    const obj = {};
    [
      ['key0', 'value0'],
      ['key1', ['a', 'r', 'r', 'a', 'y']],
      ['key2', { desc: 'an object' }],
      ['key3', () => 'a function'],
      ['key4', 4],
    ].forEach(([key, value], i, props) => {
      test(`adds property named ${key} with value ${value}`, () => {
        const expected = props.slice(0, i + 1).reduce((ac, [k, v]) => {
          ac[k] = v;
          return ac;
        }, {});

        addKV(obj, key, value);
        expect(obj).toEqual(expected);
      });
    });
  });
});
