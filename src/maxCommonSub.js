/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let maxCommonSubstring = '';
  let startIndex = 0;

  for (startIndex; startIndex < str1.length; startIndex++) {
    for (let endIndex = startIndex + 1; endIndex <= str1.length; endIndex++) {
      const currentSubstring = str1.slice(startIndex, endIndex);

      if (str2.includes(currentSubstring) && currentSubstring.length > maxCommonSubstring.length) {
        maxCommonSubstring = currentSubstring;
      }
    }
  }

  return maxCommonSubstring;
};
