const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toEqual(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(5)).toEqual(5);
  });

  it('returns the same array if given an array', () => {
    expect(_.identity([3, 5, 7])).toEqual([3, 5, 7]);
  });

  it('returns the same object if given an object', () => {
    const testObj = {this: 'is', a: 'test'};
    expect(_.identity(testObj)).toEqual(testObj);
  }); 
});