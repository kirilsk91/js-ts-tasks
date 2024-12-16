/**
 * Create the function mocker which will return defined data with 1 second delay.
 * It might be helpful in Front-end development when there is a need to make sure that your
 * interface works well with data that you get asynchronously. The use of the function is shown below:
 *
 *@response {object}
 */
module.exports.mockApi = function mockApi(response, delay) {
  // No tests to check rejected status
  return status => {
    console.log(status);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (status === 'resolve') {
          resolve(response);
        } else {
          // Status 'reject'
          reject(response);
        }
      }, delay);
    });
  };
};
