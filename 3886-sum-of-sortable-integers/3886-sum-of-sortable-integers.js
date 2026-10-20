
/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
    let n = nums.length;

    let sorted = [...nums].sort((a, b) => a - b);

    function isRotation(start, k) {
        let pattern = sorted.slice(start, start + k);

        let lps = new Array(k).fill(0);
        let len = 0;

        for (let i = 1; i < k;) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                i++;
            }
        }

        let j = 0;

        for (let i = 0; i < 2 * k - 1; i++) {
            let value = nums[start + (i % k)];

            while (j > 0 && value !== pattern[j]) {
                j = lps[j - 1];
            }

            if (value === pattern[j]) {
                j++;
            }

            if (j === k) {
                return true;
            }
        }

        return false;
    }

    let answer = 0;

    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;

        let valid = true;

        for (let start = 0; start < n; start += k) {
            if (!isRotation(start, k)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            answer += k;
        }
    }

    return answer;
};
