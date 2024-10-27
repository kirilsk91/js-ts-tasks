/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber, thirdNumber = 0) {
  // Use parseFloat to convert both arguments to numbers and use
  // split(), join() to remove whitespace from the middle of the string
  // cant use trim() here
  const parsedFirstNumber = parseFloat(firstNumber.toString().split(' ').join(''));
  const parsedSecondNumber = parseFloat(secondNumber.toString().split(' ').join(''));
  const parsedThirdNumber = parseFloat(thirdNumber.toString().split(' ').join(''));
  return parsedFirstNumber + parsedSecondNumber + parsedThirdNumber;
};
