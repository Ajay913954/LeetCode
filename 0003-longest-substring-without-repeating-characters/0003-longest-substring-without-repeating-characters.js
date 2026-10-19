/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        // If duplicate found, remove characters
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }

        // Add current character
        set.add(s[right]);

        // Update maximum length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};


