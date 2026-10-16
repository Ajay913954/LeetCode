/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;

    const sum = new Array(4 * n).fill(0);
    const sumSq = new Array(4 * n).fill(0);
    const lazy = new Array(4 * n).fill(0);

    function apply(node, left, right, value) {
        const len = right - left + 1;

        sumSq[node] =
            (sumSq[node] +
                2 * value * sum[node] +
                value * value * len) % MOD;

        sum[node] =
            (sum[node] + value * len) % MOD;

        lazy[node] += value;
    }

    function push(node, left, right) {
        if (lazy[node] === 0 || left === right) {
            return;
        }

        const mid = Math.floor((left + right) / 2);

        apply(node * 2, left, mid, lazy[node]);
        apply(node * 2 + 1, mid + 1, right, lazy[node]);

        lazy[node] = 0;
    }

    function update(node, left, right, ql, qr) {
        if (ql > right || qr < left) {
            return;
        }

        if (ql <= left && right <= qr) {
            apply(node, left, right, 1);
            return;
        }

        push(node, left, right);

        const mid = Math.floor((left + right) / 2);

        update(node * 2, left, mid, ql, qr);
        update(node * 2 + 1, mid + 1, right, ql, qr);

        sum[node] =
            (sum[node * 2] + sum[node * 2 + 1]) % MOD;

        sumSq[node] =
            (sumSq[node * 2] + sumSq[node * 2 + 1]) % MOD;
    }

    const last = new Map();
    let answer = 0;

    for (let i = 0; i < n; i++) {
        const value = nums[i];

        const prev = last.has(value)
            ? last.get(value)
            : -1;

        // Current value becomes a new distinct value
        // for all subarrays whose left boundary is > prev.
        update(node = 1, left = 0, right = n - 1,
               ql = prev + 1, qr = i);

        answer = (answer + sumSq[1]) % MOD;

        last.set(value, i);
    }

    return answer;
};