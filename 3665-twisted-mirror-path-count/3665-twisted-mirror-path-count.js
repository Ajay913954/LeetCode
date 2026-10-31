/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePaths = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let MOD = 1000000007;

    let right = Array.from({ length: m }, () => Array(n).fill(0));
    let down = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            let r = right[i][j];
            let d = down[i][j];

            if (i === 0 && j === 0) {
                r = 1;
            }

            if (grid[i][j] === 1) {

                if (i + 1 < m) {
                    down[i + 1][j] =
                        (down[i + 1][j] + r) % MOD;
                }

                if (j + 1 < n) {
                    right[i][j + 1] =
                        (right[i][j + 1] + d) % MOD;
                }

            } else {

                let ways = (r + d) % MOD;

                if (j + 1 < n) {
                    right[i][j + 1] =
                        (right[i][j + 1] + ways) % MOD;
                }

                if (i + 1 < m) {
                    down[i + 1][j] =
                        (down[i + 1][j] + ways) % MOD;
                }
            }
        }
    }

    return (right[m - 1][n - 1] + down[m - 1][n - 1]) % MOD;
};