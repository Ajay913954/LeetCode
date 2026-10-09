/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let open = 0;
    let insertions = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            // Closing pair ka second ')' check karo
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++;
            } else {
                // Ek ')' missing hai
                insertions++;
            }

            if (open > 0) {
                open--;
            } else {
                // Matching '(' missing hai
                insertions++;
            }
        }
    }

    // Har remaining '(' ko do ')' chahiye
    return insertions + open * 2;
};