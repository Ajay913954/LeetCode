/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {

    if (digits.length === 0) {
        return [];
    }

    let map = [
        "",     // 0
        "",     // 1
        "abc",  // 2
        "def",  // 3
        "ghi",  // 4
        "jkl",  // 5
        "mno",  // 6
        "pqrs", // 7
        "tuv",  // 8
        "wxyz"  // 9
    ];

    let result = [];

    function backtrack(index, current) {

        // Base case
        if (index === digits.length) {
            result.push(current);
            return;
        }

        // Current digit
        let digit = Number(digits[index]);

        // Get corresponding letters
        let letters = map[digit];

        // Try every letter
        for (let i = 0; i < letters.length; i++) {

            backtrack(index + 1, current + letters[i]);

        }
    }

    backtrack(0, "");

    return result;
};
