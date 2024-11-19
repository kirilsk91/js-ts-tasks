/**
 * Write arrItem function which removes from given array items are equal arrItem given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  const filteredArray = arr.filter(arrayEl => {
    // In roder to do arrayEl comparison of objects/arrays by their values (deep equality)
    // we should use JSON.stringify() to make flat the properties
    if (typeof arrayEl === 'object' && typeof value === 'object') {
      return JSON.stringify(arrayEl) !== JSON.stringify(value);
    }
    // Primitive types like number/string/booleam can be compared directly
    return arrayEl !== value;
  });

  return filteredArray;
};
