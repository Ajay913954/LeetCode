/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    // Check if a valid number is possible
    if (sum > num * 9) {
        return "";
    }

    let result = [];

    for (let i = 0; i < num; i++) {
        let digit = Math.min(9, sum);

        result.push(digit);

        sum = sum - digit;
    }

    return result.join("");
};