
/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let n = s.length;

    // Check already sorted
    let sorted = true;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            sorted = false;
            break;
        }
    }

    if (sorted) return 0;

    // Only two characters
    if (n === 2) return -1;

    let min = 'z';
    let max = 'a';
    let minCount = 0;
    let maxCount = 0;

    // Find minimum and maximum
    for (let i = 0; i < n; i++) {
        if (s[i] < min) min = s[i];
        if (s[i] > max) max = s[i];
    }

    // Count minimum and maximum
    for (let i = 0; i < n; i++) {
        if (s[i] === min) minCount++;
        if (s[i] === max) maxCount++;
    }

    // One operation
    if (s[0] === min || s[n - 1] === max) {
        return 1;
    }

    // Three operations
    if (s[0] === max && s[n - 1] === min &&
        maxCount === 1 && minCount === 1) {
        return 3;
    }

    // Otherwise two operations
    return 2;
};

