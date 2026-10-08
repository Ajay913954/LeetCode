/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Non-alphanumeric character skip karo
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Characters compare karo
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

function isAlphaNumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}