/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  // doesnt work with objs
  const filteredArr = arr.filter(v => v !== value);
  return filteredArr;
};
