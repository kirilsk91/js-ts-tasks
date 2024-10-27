/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length) {
    return str;
  }
  const slicedSymbols = str.slice(str.length - symbolsCount);
  const resStr = `${slicedSymbols}${str}${slicedSymbols}`;

  return resStr;
};
