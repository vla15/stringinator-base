const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const nums = [5, 7, 9, 12];
    expect(_.last(nums)).toBe(12);
  });

  it('returns the last 2 elements of an array', () => {
    const strings = ['hello', 'world', 'of', 'mine'];
    expect(_.last(strings, 2)).toEqual(['of', 'mine']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const nums = [3, 2, 1];
    expect(_.last(nums, 4)).toEqual([3, 2, 1]);
  });
});