/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  // either .hasOwnProperty() or compare obj['propname'] with undefined
  return prop.toString() in object;
};
