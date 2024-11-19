/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  // Naive solution with high complexity.
  // We can use Set to handle duplicate items in array and return array size.
  // let i = 0;
  // const elArr = [];
  // while (i < arr.length) {
  //   if (!elArr.includes(arr[i])) {
  //     elArr.push(arr[i]);
  //   }
  //   i += 1;
  // }
  // return elArr.length;
  const result = new Set(arr);

  return result.size;
};
