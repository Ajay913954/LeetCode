/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007n;
    const n = nums.length;

    // Step 1: Precompute combinations using Pascal's Triangle
    const comb = Array.from(
        { length: n + 1 },
        () => Array(n + 1).fill(0)
    );

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1;
        comb[i][i] = 1;

        for (let j = 1; j < i; j++) {
            comb[i][j] =
                (comb[i - 1][j - 1] + comb[i - 1][j]) %
                1000000007;
        }
    }

    // Step 2: Recursive function
    function solve(arr) {
        if (arr.length <= 2) {
            return 1n;
        }

        const root = arr[0];

        const left = [];
        const right = [];

        // Step 3: Divide into left and right subtrees
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        // Step 4: Solve both subtrees
        const leftWays = solve(left);
        const rightWays = solve(right);

        // Step 5: Calculate interleaving combinations
        const total = left.length + right.length;

        const combinations = BigInt(
            comb[total][left.length]
        );

        let ways =
            (leftWays * rightWays * combinations) % MOD;

        return ways;
    }

    // Original ordering is also counted, so subtract 1
    const answer = (solve(nums) - 1n + MOD) % MOD;

    return Number(answer);
};