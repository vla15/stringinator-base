const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = [1, 2, 3, 4];
    const result = _.contains(arr, 4);
    expect(result).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = ['hello', 'this', 'is', 'a', 'test'];
    const result = _.contains(arr, 'where');
    expect(result).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const obj = {
      hello: 4,
      world: 3,
      testing: 'there'
    }
    const result = _.contains(obj, 'there');
    expect(result).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const obj = {
      this: 'will fail',
      one: 1,
      two: 2,
      three: 5
    }
    const result = _.contains(obj, 7);
    expect(result).toBe(false);
  });
});