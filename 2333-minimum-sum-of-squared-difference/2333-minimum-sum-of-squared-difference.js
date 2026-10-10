/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let n = nums1.length;
    let k = k1 + k2;
    let diff = new Array(100001).fill(0);
    let maxDiff = 0;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let d = Math.abs(nums1[i] - nums2[i]);

        diff[d]++;
        maxDiff = Math.max(maxDiff, d);
        total += d;
    }

    if (k >= total) {
        return 0;
    }

    for (let d = maxDiff; d > 0 && k > 0; d--) {
        let move = Math.min(diff[d], k);

        diff[d] -= move;
        diff[d - 1] += move;
        k -= move;
    }

    let result = 0;

    for (let d = 1; d <= maxDiff; d++) {
        result += diff[d] * d * d;
    }

    return result;
};