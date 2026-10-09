/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {};

    // Step 1: Har character ki frequency count karo
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    // Step 2: Pehla character find karo jo sirf ek baar aaya hai
    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};