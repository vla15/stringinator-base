const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['this', 'should', 'iterate'];
    let wordResult = [];
    let indexResult = [];
    let arrayResult;
    _.each(arr, (word, index, array) => {
      wordResult.push(word);
      indexResult.push(index);
      arrayResult = array;
    });
    expect(wordResult).toEqual(['this', 'should', 'iterate']);
    expect(indexResult).toEqual([0, 1, 2]);
    expect(arrayResult).toEqual(arr);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrLikeObj = {
      length: 3,
      0: 'darling',
      1: 'best',
      2: 'test'
    }
    let elResults = [];
    let indexResults = [];
    let arrTest;
    _.each(arrLikeObj, (element, index, arrayLikeObj) => {
      elResults.push(element);
      indexResults.push(index);
      arrTest = arrayLikeObj;
    });
    expect(elResults).toEqual(['darling', 'best', 'test']);
    expect(indexResults).toEqual([0, 1, 2]);
    expect(arrTest).toEqual(arrLikeObj);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const obj = {
      test: 'level',
      will: 'return',
      soon: 'here'
    };
    let values = [];
    let keys  = [];
    let objTest;
    _.each(obj, (value, key, iteratedObj) => {
      values.push(value);
      keys.push(key)
      objTest = iteratedObj;
    });
    expect(values).toEqual(['level', 'return', 'here']);
    expect(keys).toEqual(['test', 'will', 'soon']);
    expect(objTest).toEqual(obj);
  });
});

