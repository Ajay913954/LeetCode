/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    let count = new Array(31).fill(0);

    // Step 1: Count set bits
    for (let num of nums) {
        for (let bit = 0; bit < 31; bit++) {
            if ((num >> bit) & 1) {
                count[bit]++;
            }
        }
    }

    let ans = 0n;
    let MOD = 1000000007n;

    // Step 2: Build k maximum numbers
    for (let i = 0; i < k; i++) {
        let num = 0;

        for (let bit = 0; bit < 31; bit++) {
            if (count[bit] > 0) {
                num |= (1 << bit);
                count[bit]--;
            }
        }

        // Step 3: Add square using BigInt
        let value = BigInt(num);
        ans = (ans + value * value) % MOD;
    }

    return Number(ans);
};