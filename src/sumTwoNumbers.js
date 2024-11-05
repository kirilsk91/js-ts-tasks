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
  const parseNum = (num) => {
    return parseFloat(num.toString().split(' ').join(""))
  }
  const parsedFirstNumber = parseNum(firstNumber);
  const parsedSecondNumber = parseNum(secondNumber);
  const parsedThirdNumber = parseNum(thirdNumber);
  return parsedFirstNumber + parsedSecondNumber + parsedThirdNumber;
};
