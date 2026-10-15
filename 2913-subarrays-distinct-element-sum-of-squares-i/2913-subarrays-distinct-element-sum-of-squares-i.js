/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        let set = new Set();

        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);

            let distinctCount = set.size;

            total += distinctCount * distinctCount;
        }
    }

    return total;
};