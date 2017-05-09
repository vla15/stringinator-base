const _ = require('./underbar');

const first = function(str, n) {
  // Your code goes here
};

const last = function(str, n) {
  // Your code goes here
};

const removeChar = function(str, target) {
  // hint: use _.reject
  // Your code goes here
};

const hasChar = function(str, target) {
  // hint: use _.some
  // Your code goes here
};

const isOnlyDigits = function(str) {
  // Your code goes here
};

const filterToOnlyDigits = function(str) {
  // Your code goes here
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
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