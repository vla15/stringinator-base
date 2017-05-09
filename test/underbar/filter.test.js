const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    expect(_.filter(arr, num => num % 2 !== 0)).toEqual([1, 3, 5, 7]);
  });

  it('filters an object to only numeric values', () => {
    const testObj = {
      notANumber: 'hello',
      string: 'fifteen',
      aNum: 9,
      num: 5
    };
    expect(_.filter(testObj, num => typeof num === 'number')).toEqual([9, 5]);
  });
});