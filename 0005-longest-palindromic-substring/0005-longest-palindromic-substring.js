/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let start = 0;
    let maxLength = 1;

    function expand(left, right) {

        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {

        // Odd length palindrome
        let len1 = expand(i, i);

        // Even length palindrome
        let len2 = expand(i, i + 1);

        let len = Math.max(len1, len2);

        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
};