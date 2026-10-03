/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // Opening bracket
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            // Closing bracket, but no opening bracket
            if (stack.length === 0) {
                return false;
            }

            let last = stack.pop();

            if (
                (ch === ')' && last !== '(') ||
                (ch === '}' && last !== '{') ||
                (ch === ']' && last !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};