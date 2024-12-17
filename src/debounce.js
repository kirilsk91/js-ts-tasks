/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  // let cooldown = null;
  let onCooldown = false;
  return (...argsArray) => {
    if (!onCooldown) {
      fn(...argsArray);
      onCooldown = true;
    }

    // Clear the previous delay
    // clearTimeout(cooldown);

    // cooldown = setTimeout(() => {
    //   cooldown = null;
    // }, delay);
    setTimeout(() => {
      onCooldown = false;
    }, delay);
  };
};