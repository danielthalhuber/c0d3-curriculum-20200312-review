const { primeMachine } = require('./prime-machine');

describe('primeMachine', () => {
  it('returns a function that generates the first prime when no parameters are given', () => {
    expect(primeMachine()()).toEqual(2);
  });

  it('returns a function that generates the first three primes', () => {
    const getNextPrime = primeMachine(1);

    expect(getNextPrime()).toEqual(2);
    expect(getNextPrime()).toEqual(3);
    expect(getNextPrime()).toEqual(5);
  });
});
