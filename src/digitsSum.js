/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const absValString = Math.abs(n).toString();
  let res = 0;
  let index = 0;
  while (index < absValString.length) {
    res += parseInt(absValString[index]);
    index++;
  }
  return res;
};
