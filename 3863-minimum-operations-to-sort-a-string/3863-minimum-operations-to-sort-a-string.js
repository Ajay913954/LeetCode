
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {

    let n = s.length;

    // Step 1: Already sorted
    if (s === s.split('').sort().join('')) {
        return 0;
    }

    // Step 2: Only two characters
    if (n === 2) {
        return -1;
    }

    let min = 'z';
    let max = 'a';

    // Find minimum and maximum characters
    for (let i = 0; i < n; i++) {
        if (s[i] < min) {
            min = s[i];
        }

        if (s[i] > max) {
            max = s[i];
        }
    }

    // Step 3: One operation
    if (s[0] === min || s[n - 1] === max) {
        return 1;
    }

    // Count minimum and maximum characters
    let minCount = 0;
    let maxCount = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === min) minCount++;
        if (s[i] === max) maxCount++;
    }

    // Step 4: Three operations
    if (s[0] === max && s[n - 1] === min &&
        maxCount === 1 && minCount === 1) {
        return 3;
    }

    // Step 5: Otherwise two operations
    return 2;
};
