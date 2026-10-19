/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    if (s1.length > s2.length) return false;

    let s1Count = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    // Count characters of s1
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - 97]++;
        windowCount[s2.charCodeAt(i) - 97]++;
    }

    // Check first window
    if (s1Count.join() === windowCount.join()) {
        return true;
    }

    // Slide the window
    for (let right = s1.length; right < s2.length; right++) {

        // Add new character
        windowCount[s2.charCodeAt(right) - 97]++;

        // Remove old character
        windowCount[s2.charCodeAt(right - s1.length) - 97]--;

        // Compare character frequencies
        if (s1Count.join() === windowCount.join()) {
            return true;
        }
    }

    return false;
};