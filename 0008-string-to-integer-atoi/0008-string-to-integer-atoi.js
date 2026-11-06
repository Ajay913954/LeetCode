/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let num = 0;

    // Skip leading spaces
    while (s[i] === ' ') {
        i++;
    }

    // Check sign
    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // Convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        num = num * 10 + digit;

        // Handle overflow
        if (sign === 1 && num > 2147483647) {
            return 2147483647;
        }

        if (sign === -1 && num > 2147483648) {
            return -2147483648;
        }

        i++;
    }

    return num * sign;
};