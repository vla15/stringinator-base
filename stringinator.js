const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, item => item === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, item => target === item);
};

const isOnlyDigits = function(str) {
  return _.every(str, num => !isNaN(num));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, num => parseInt(num)).join('');
};

const truncateString = function(val, maxLength) {
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  if (typeof obj === 'string') {
    return truncateString(obj, maxLength);
  } else {
    return _.map(obj, item => {
      return truncateString(item, maxLength);
    });
  }
};

const countChars = function(str) {
  return _.reduce(str, (obj, letter) => {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
    return obj
  }, {});
};

const dedup = function(str) {
  return _.uniq(str).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};