/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

var fourSum = function(nums, target) {

    // Step 1: Sort array
    nums.sort((a, b) => a - b);

    let result = [];
    let n = nums.length;

    // Step 2: First number
    for (let i = 0; i < n - 3; i++) {

        // Skip duplicate first numbers
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Step 3: Second number
        for (let j = i + 1; j < n - 2; j++) {

            // Skip duplicate second numbers
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            // Step 4: Two pointers
            let left = j + 1;
            let right = n - 1;

            while (left < right) {

                let sum = nums[i] + nums[j] +
                          nums[left] + nums[right];

                if (sum === target) {

                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate left values
                    while (left < right &&
                           nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Skip duplicate right values
                    while (left < right &&
                           nums[right] === nums[right + 1]) {
                        right--;
                    }

                } 
                else if (sum < target) {
                    left++;
                } 
                else {
                    right--;
                }
            }
        }
    }

    return result;
};
