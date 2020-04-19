const { addDescriptions } = require('.');

describe('addDescriptions', () => {
  test('modifies the original array, adding correct descriptions', () => {
    const arr = [{ name: 'Bob' }, { name: 'Ned' }];
    const obj = { Bob: 'Boring', Ned: 'Even more boring' };
    const expected = [
      { name: 'Bob', description: 'Boring' },
      { name: 'Ned', description: 'Even more boring' },
    ];
    addDescriptions(arr, obj);
    expect(arr).toEqual(expected);
  });

  test('does not modify the original array when names do not match', () => {
    const arr = [{ name: 'Bob' }, { name: 'Ned' }];
    const obj = { Bobo: 'Boring', Nerd: 'Even more boring' };
    const expected = [...arr];
    addDescriptions(arr, obj);
    expect(arr).toEqual(expected);
  });
});
