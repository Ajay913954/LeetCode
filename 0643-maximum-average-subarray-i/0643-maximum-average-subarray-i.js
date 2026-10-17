/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    // Step 1: First window ka sum
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    // Step 2: Maximum sum initialize karo
    let maxSum = windowSum;

    // Step 3: Sliding window
    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum - nums[i - k] + nums[i];

        maxSum = Math.max(maxSum, windowSum);
    }

    // Step 4: Maximum average return karo
    return maxSum / k;
};