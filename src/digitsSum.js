/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  const absValString = Math.abs(n).toString();
  let res = 0;
  for (let index = 0; index < absValString.length; index++) {
    res += parseInt(absValString[index], 10);
  }
  return res;
};
