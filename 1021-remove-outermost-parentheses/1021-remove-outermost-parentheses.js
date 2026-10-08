/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let balance = 0;
    let result = "";

    for (let char of s) {
        if (char === '(') {
            // Agar balance 0 hai, ye outermost '(' hai
            if (balance > 0) {
                result += char;
            }

            balance++;
        } else {
            balance--;

            // Agar balance 0 ho gaya,
            // ye outermost ')' hai, isliye skip karo
            if (balance > 0) {
                result += char;
            }
        }
    }

    return result;
};