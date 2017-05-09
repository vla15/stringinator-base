const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const arr = [1, 2, 3, 4];
      expect(_.every(arr)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [3, 5, 7, 9];
      expect(_.every(arr, num => num % 2 !== 0)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [3, 5, 4, 9];
      expect(_.every(arr, num => num % 2 !== 0)).toBe(false);
    });
  });
});