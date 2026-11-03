/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {

    nums.sort((a, b) => a - b);

    let mid = Math.floor(nums.length / 2);
    let median = nums[mid];

    let moves = 0;

    for (let i = 0; i < nums.length; i++) {
        moves += Math.abs(nums[i] - median);
    }

    return moves;
};