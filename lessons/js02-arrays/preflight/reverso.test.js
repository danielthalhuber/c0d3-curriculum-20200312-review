const { reverso } = require('./reverso');

describe('reverso', () => {
  it('returns a reversed string', () => {
    expect(reverso('abc')).toEqual('cba');
  });
  it('returns a reversed string', () => {
    expect(reverso(' aaaa')).toEqual('aaaa ');
  });
  it('returns the same string', () => {
    expect(reverso('aba')).toEqual('aba');
  });
});
