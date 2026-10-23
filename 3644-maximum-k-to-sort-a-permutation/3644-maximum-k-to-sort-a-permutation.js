/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let n = nums.length;
    let ans = -1;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i) {
            ans &= nums[i];
            ans &= i;
        }
    }
    return ans === -1 ? 0 : ans;
};