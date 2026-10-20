
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    function mergeSort(arr) {

        // Base condition
        if (arr.length <= 1) {
            return arr;
        }

        // Divide array into two halves
        let mid = Math.floor(arr.length / 2);

        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));

        // Merge sorted halves
        return merge(left, right);
    }

    function merge(left, right) {

        let result = [];
        let i = 0;
        let j = 0;

        // Compare both arrays
        while (i < left.length && j < right.length) {

            if (left[i] <= right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

        // Add remaining elements
        while (i < left.length) {
            result.push(left[i]);
            i++;
        }

        while (j < right.length) {
            result.push(right[j]);
            j++;
        }

        return result;
    }

    return mergeSort(nums);
};
