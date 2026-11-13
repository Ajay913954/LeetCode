
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
    let n = nums.length;

    let deque = [];
    let head = 0;

    let j = n - 1;
    let cost = 0;
    let count = 0;

    for (let i = n - 1; i >= 0; i--) {

        // Remove smaller elements and calculate cost
        while (
            deque.length > head &&
            nums[deque[deque.length - 1]] < nums[i]
        ) {
            let l = deque.pop();

            let r = deque.length > head
                ? deque[deque.length - 1]
                : j + 1;

            cost += (r - l) * (nums[i] - nums[l]);
        }

        deque.push(i);

        // Shrink window if cost exceeds k
        while (cost > k) {
            let r = deque[head];

            cost -= nums[r] - nums[j];

            if (r === j) {
                head++;
            }

            j--;
        }

        // Count valid subarrays
        count += j - i + 1;
    }

    return count;
};
