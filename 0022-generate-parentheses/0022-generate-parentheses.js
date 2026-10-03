/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];

    function backtrack(current, open, close) {
        // n pairs complete ho gaye
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        // Opening bracket add kar sakte hain
        if (open < n) {
            backtrack(current + "(", open + 1, close);
        }

        // Closing bracket tabhi add kar sakte hain
        // jab opening brackets zyada hon
        if (close < open) {
            backtrack(current + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};