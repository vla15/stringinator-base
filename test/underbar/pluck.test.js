const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
    {age: 10, size: 15},
    {age: 9, size: 12},
    {age: 33, size: 120}
    ];
    expect(_.pluck(people, 'age')).toEqual([10, 9, 33]);
  });
});