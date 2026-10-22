/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let n = nums.length;
    let ans = Infinity;

    // Check rotations of sorted array
    let k = nums[0];
    let valid = true;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== (k + i) % n) {
            valid = false;
            break;
        }
    }

    if (valid) {
        ans = Math.min(ans, k === 0 ? 0 : n - k);
        ans = Math.min(ans, k + 2);
    }

    // Check rotations of reversed sorted array
    k = (n - 1 - nums[0] + n) % n;
    valid = true;

    for (let i = 0; i < n; i++) {
        let expected = (n - 1 - (k + i) % n + n) % n;

        if (nums[i] !== expected) {
            valid = false;
            break;
        }
    }

    if (valid) {
        ans = Math.min(ans, k + 1, n - k + 1);
    }

    return ans === Infinity ? -1 : ans;
};
