/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */

var findSubtreeSizes = function(parent, s) {
    let n = parent.length;

    // Step 1: Build original tree
    let children = Array.from({ length: n }, () => []);

    for (let i = 1; i < n; i++) {
        children[parent[i]].push(i);
    }

    // Step 2: Build updated tree
    let newChildren = Array.from({ length: n }, () => []);

    let last = new Array(26).fill(-1);

    function dfs(node) {
        let char = s.charCodeAt(node) - 97;

        // Previous node with same character
        let old = last[char];

        // Find new parent
        let newParent = old !== -1 ? old : parent[node];

        if (node !== 0) {
            newChildren[newParent].push(node);
        }

        // Update latest ancestor
        last[char] = node;

        // Visit original children
        for (let child of children[node]) {
            dfs(child);
        }

        // Backtracking
        last[char] = old;
    }

    dfs(0);

    // Step 3: Calculate subtree sizes
    let answer = new Array(n).fill(1);

    function calculate(node) {
        for (let child of newChildren[node]) {
            calculate(child);
            answer[node] += answer[child];
        }
    }

    calculate(0);

    return answer;
};
