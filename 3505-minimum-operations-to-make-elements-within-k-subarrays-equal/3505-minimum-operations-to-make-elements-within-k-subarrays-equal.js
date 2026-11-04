/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
    let n = nums.length;

    // Coordinate compression
    let values = [...new Set(nums)].sort((a, b) => a - b);
    let size = values.length;

    let count = Array(size + 1).fill(0);
    let sum = Array(size + 1).fill(0);

    // Fenwick Tree update
    function update(bit, i, val) {
        while (i <= size) {
            bit[i] += val;
            i += i & -i;
        }
    }

    // Fenwick Tree prefix sum
    function query(bit, i) {
        let result = 0;

        while (i > 0) {
            result += bit[i];
            i -= i & -i;
        }

        return result;
    }

    // Find kth smallest element
    function findKth(kth) {
        let idx = 0;
        let bitMask = 1;

        while (bitMask * 2 <= size) {
            bitMask *= 2;
        }

        while (bitMask > 0) {
            let next = idx + bitMask;

            if (next <= size && count[next] < kth) {
                idx = next;
                kth -= count[next];
            }

            bitMask = Math.floor(bitMask / 2);
        }

        return idx + 1;
    }

    // Get compressed index
    function getIndex(num) {
        let low = 0;
        let high = size - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (values[mid] === num) return mid + 1;

            if (values[mid] < num) low = mid + 1;
            else high = mid - 1;
        }
    }

    // Add or remove element
    function add(num, val) {
        let idx = getIndex(num);

        update(count, idx, val);
        update(sum, idx, num * val);
    }

    // Calculate minimum cost of current window
    function getCost() {
        let medianIndex = findKth(Math.floor((x + 1) / 2));
        let median = values[medianIndex - 1];

        let leftCount = query(count, medianIndex);
        let leftSum = query(sum, medianIndex);

        let totalSum = query(sum, size);

        let rightCount = x - leftCount;
        let rightSum = totalSum - leftSum;

        return median * leftCount - leftSum +
               rightSum - median * rightCount;
    }

    // Calculate cost of every window
    let cost = [];

    for (let i = 0; i < x; i++) {
        add(nums[i], 1);
    }

    cost.push(getCost());

    for (let i = x; i < n; i++) {
        add(nums[i - x], -1);
        add(nums[i], 1);

        cost.push(getCost());
    }

    // DP
    let prev = Array(n + 1).fill(0);

    for (let t = 1; t <= k; t++) {
        let curr = Array(n + 1).fill(Infinity);

        for (let i = 1; i <= n; i++) {

            // Skip current element
            curr[i] = curr[i - 1];

            // Select subarray of size x
            if (i >= x) {
                curr[i] = Math.min(
                    curr[i],
                    prev[i - x] + cost[i - x]
                );
            }
        }

        prev = curr;
    }

    return prev[n];
};