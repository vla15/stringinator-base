const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 7, 6, 13];
    expect(_.reject(nums, num => num % 2 !== 0)).toEqual([2, 4, 6]);
  });

  it('rejects null values from an object', () => {
    const words = ['hello', null, 'forget', null, 'world'];
    expect(_.reject(words, word => word === null)).toEqual(['hello', 'forget', 'world']);
  });
});