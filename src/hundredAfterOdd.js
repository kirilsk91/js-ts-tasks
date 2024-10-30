/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  const elArr = [];

  let i = 0;
  while (i < arr.length) {
    elArr.push(arr[i]);

    if (arr[i] % 2 !== 0) {
      elArr.push(100);
    }

    i += 1;
  }
  return elArr;
};
