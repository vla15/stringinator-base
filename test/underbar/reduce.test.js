const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const nums = [3, 3, 6];
    expect(_.reduce(nums, (a, b) => a + b, 2)).toBe(14);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const nums = [7, 13, 2];
    expect(_.reduce(nums, (numOne, numTwo) => numOne + numTwo)).toBe(22);
  });
});