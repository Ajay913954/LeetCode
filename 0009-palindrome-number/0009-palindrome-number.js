/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverse = 0;

    while (x > reverse) {
        let digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return x === reverse || x === Math.floor(reverse / 10);
};