const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = ['i', 'am', 'an', 'array'];
    expect(_.isArrayLike(arr)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrLikeObj = {
      length: 2,
      0: 'hello',
      master: 'five'
    };
    expect(_.isArrayLike(arrLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const regObj = {
      test: 5,
      hello: 'world',
      number: 9
    };
    expect(_.isArrayLike(regObj)).toBe(false);
  });
});
