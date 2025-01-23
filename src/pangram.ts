/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
// eslint-disable-next-line func-names
module.exports.pangram = function (word: string | number): boolean {
  const numOfAllAlphabetLetters = 26;
  const numOfAllDigits = 10;

  if (typeof word === 'string') {
    // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // remove any white spaces and non-letter characters in the whole string
    const uniqueWordLetters = new Set(word.toLowerCase().replace(/[^a-z]/g, ''));
    // return alphabet.split('').every(letter => uniqueWordLetters.has(letter));
    return uniqueWordLetters.size === numOfAllAlphabetLetters;
  }

  if (typeof word === 'number') {
    // const numbers = '1234567890';
    const uniqueDigitNumbers = new Set(word.toString());
    // return numbers.split('').every(numDigit => uniqueDigitNumbers.has(numDigit));
    return uniqueDigitNumbers.size === numOfAllDigits;
  }

  return false;
};
