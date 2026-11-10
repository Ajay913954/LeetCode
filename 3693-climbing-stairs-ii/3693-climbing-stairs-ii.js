/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    let dp = new Array(n + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= n; i++) {

        for (let jump = 1; jump <= 3; jump++) {

            if (i - jump >= 0) {
                let cost = costs[i - 1] + jump * jump;

                dp[i] = Math.min(
                    dp[i],
                    dp[i - jump] + cost
                );
            }
        }
    }

    return dp[n];
};