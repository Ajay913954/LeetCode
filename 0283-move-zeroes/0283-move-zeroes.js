/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZero = nums.filter(num => num !== 0);
    let zeroCount = nums.length - nonZero.length;

    nums.splice(0, nums.length, ...nonZero, ...Array(zeroCount).fill(0));
};