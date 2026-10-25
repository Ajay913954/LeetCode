/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    function dfs(r, c) {
        // Boundary ke bahar ya water mila
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 1) {
            return;
        }

        // Visited land ko water mark kar do
        grid[r][c] = 1;

        // 4 directions mein check karo
        dfs(r - 1, c); // Up
        dfs(r + 1, c); // Down
        dfs(r, c - 1); // Left
        dfs(r, c + 1); // Right
    }

    // Step 1: Boundary se connected islands remove karo
    for (let r = 0; r < rows; r++) {
        dfs(r, 0);
        dfs(r, cols - 1);
    }

    for (let c = 0; c < cols; c++) {
        dfs(0, c);
        dfs(rows - 1, c);
    }

    // Step 2: Remaining islands count karo
    let count = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                count++;
                dfs(r, c);
            }
        }
    }

    return count;
};
