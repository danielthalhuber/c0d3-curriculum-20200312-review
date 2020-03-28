const { less3Diff } = require('./less-3-diff');

describe('less3Diff', () => {
  it('returns true when only one character is different', () => {
    expect(less3Diff('spiderman', 'spyderman')).toBe(true);
  });
  it('returns false when first three characters are different', () => {
    expect(less3Diff('spiderman', 'mary jane')).toBe(false);
  });
  it('returns false when the chars at indices 4, 5 and 8 are different', () => {
    expect(less3Diff('spiderman', 'spidremal')).toBe(false);
  });
});
