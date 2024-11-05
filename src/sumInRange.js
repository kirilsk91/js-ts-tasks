/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let res = 0;
  // need to check the lower and higher value out of both parameters
  // in case start < end
  // Number() converts entire value to number, including other types
  // parseInt() used to convert strings ignoring all non-numeric values '12abcd'
  // that follow potential number
  const parsedStart = parseInt(start);
  const parsedEnd = parseInt(end);
  const lowValue = Math.min(parsedStart, parsedEnd);
  const highValue = Math.max(parsedStart, parsedEnd);
  let count = lowValue;
  while (count <= highValue) {
    res += count;
    count += 1;
  }

  return res;
};
