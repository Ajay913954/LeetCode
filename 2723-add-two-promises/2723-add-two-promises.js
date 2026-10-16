/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = function(promise1, promise2) {

    return Promise.all([promise1, promise2])
        .then(([num1, num2]) => {
            return num1 + num2;
        });
};
/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */