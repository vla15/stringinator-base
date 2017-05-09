const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const nums = [2, 7, 9, 12];
    expect(_.indexOf(nums, 2)).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const strings = ['hello', 'this', 'is', 'life'];
    expect(_.indexOf(strings, 'life')).toBe(3);
  });

  it('returns -1 for a missing value', () => {
    const nums = [4, 5, 12, 44];
    expect(_.indexOf(nums, 43)).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = ['hello', 'testing', 'hello'];
    expect(_.indexOf(arr, 'hello')).toBe(0);
  });

  it('starts searching at the given offset', () => {
    const nums = [4, 12, 7, 9, 12, 3];
    expect(_.indexOf(nums, 12, 2)).toBe(4);
  });
});