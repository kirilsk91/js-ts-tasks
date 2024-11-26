/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
// eslint-disable-next-line no-unused-vars
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  // Not sure where to use highestNumber parameter
  const isPrime = num => {
    // Natural numbers (greater than 1) can be prime numbers, except
    // when they are even (excluding 2)
    if (num === 1 || (num % 2 === 0 && num !== 2)) return false;
    const sqrtNum = Math.sqrt(num);
    for (let i = 2; i <= sqrtNum; i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  return (num1, num2) => {
    const primesArray = [];
    const low = Math.min(num1, num2);
    const high = Math.max(num1, num2);
    let i = low;
    while (i <= high) {
      if (isPrime(i)) primesArray.push(i);
      i += 1;
    }
    return primesArray;
  };
};
