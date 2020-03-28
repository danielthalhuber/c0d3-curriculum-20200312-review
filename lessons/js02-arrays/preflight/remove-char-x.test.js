const { removeCharX } = require('./remove-char-x');

describe('removeCharX', () => {
  it('should remove the first character', () => {
    expect(removeCharX('ABC', 1)).toEqual('AC');
  });
  it('should remove no characters', () => {
    expect(removeCharX('ABC', -2)).toEqual('ABC');
  });
  it('should remove no characters', () => {
    expect(removeCharX('ABC', 4)).toEqual('ABC');
  });
});
