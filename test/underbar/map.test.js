const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const nums = [2, 4, 6];
    expect(_.map(nums, num => num * num)).toEqual([4, 16, 36]);
  });
});