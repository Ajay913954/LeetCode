/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let low = 0;
    let high = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] === '(') {
            low++;
            high++;
        } 
        else if (s[i] === ')') {
            low--;
            high--;
        } 
        else {
            // '*' can be '(' or ')' or empty
            low--;
            high++;
        }

        // Agar maximum possible open brackets bhi negative ho gaye
        if (high < 0) {
            return false;
        }

        // Minimum negative ho sakta hai, but 0 se kam possible count ko 0 kar do
        if (low < 0) {
            low = 0;
        }
    }

    return low === 0;
};