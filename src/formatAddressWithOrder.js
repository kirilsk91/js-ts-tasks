/**
 * Write a function which returns a formatter function to format address based on input address data
 * Array 'order' is specifying the format by string index in array.
 * In result address string all entities should be divided with ', ' except the last one (no ', ' at the end)
 * Example:
 * order = ['city', 'street', 'house', 'apartment', 'postalCode', 'country']
 * gives address string like: 'city, street, house, apartment, postalCode, country'
 * @param {Array} order
 * @returns {function}
 */
module.exports.formatAddressWithOrder = function formatAddressWithOrder(order) {
  // return objectWithAdress => {
  //   let result = '';
  //   order.forEach((el, index) => {
  //     result += index !== order.length - 1 ? `${objectWithAdress[el]}, ` : objectWithAdress[el];
  //   });
  //   return result;
  // };
  // Or use a map() method to extract adress fields
  // into array, then concatanate elements together with ', '
  return objectWithAdress => order.map(el => objectWithAdress[el]).join(', ');
};
