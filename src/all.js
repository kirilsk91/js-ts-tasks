/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  const res = new Promise((resolve, reject) => {
    let resolvedValues = [];
    let completedPromises = 0;

    promisesArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          //cant use push() here, need to keep order of promises
          resolvedValues[index] = value;
          completedPromises++;
          if (completedPromises === promisesArray.length) {
            resolve(resolvedValues);
          }
        })
        .catch(reject);
    });
  });

  return res;
};
