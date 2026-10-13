/**
 * @param {number[]} nums
 * @return {number}
 */

var maxAlternatingSum = function(nums) {
    let squares = [];

    for (let i = 0; i < nums.length; i++) {
        squares.push(nums[i] * nums[i]);
    }

    squares.sort((a, b) => b - a);

    let sum = 0;
    let positiveCount = Math.ceil(nums.length / 2);

    for (let i = 0; i < squares.length; i++) {
        if (i < positiveCount) {
            sum += squares[i];
        } else {
            sum -= squares[i];
        }
    }

    return sum;
};
