const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [3, 9, 3, 5, 2, 1, 5];
    expect(_.uniq(nums)).toEqual([3, 9, 5, 2, 1]);
  });
});