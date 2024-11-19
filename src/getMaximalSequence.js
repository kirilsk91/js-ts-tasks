/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let longestSequence = [];
  let currentSequence = [arr[0]];
  let i = 1;

  while (i < arr.length) {
    if (arr[i - 1] === arr[i]) {
      currentSequence.push(arr[i]);
    } else {
      // arr[i - 1] !== arr[i]
      // We assume current sequence is the longest one
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      // and start a new sequence
      currentSequence = [arr[i]];
    }

    i += 1;
  }

  if (currentSequence.length > longestSequence.length) {
    longestSequence = currentSequence;
  }

  return longestSequence;
};
