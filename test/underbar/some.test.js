const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [4, 12, 12, 4, 7, 34];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const numbers = [4, 20, 16, 2, 8];
    expect(_.some(numbers, num => num % 2 === 1)).toBe(false);
  });
});