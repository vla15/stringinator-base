const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const arr = ['hello', 'world'];
    expect(_.first(arr)).toBe('hello');
  });

  it('returns the first 2 elements of an array', () => {
    const arr = [3, 5, 7, 9];
    expect(_.first(arr, 2)).toEqual([3, 5]);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const arr = ['please', 'return', 'this', 'whole', 'array'];
    expect(_.first(arr, 7)).toEqual(['please', 'return', 'this', 'whole', 'array']);
  }); 
});