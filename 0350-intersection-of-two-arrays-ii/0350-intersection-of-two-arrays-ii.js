/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];

    // nums1 ki frequency count karo
    for (let i = 0; i < nums1.length; i++) {
        if (map[nums1[i]]) {
            map[nums1[i]]++;
        } else {
            map[nums1[i]] = 1;
        }
    }

    // nums2 ke elements check karo
    for (let i = 0; i < nums2.length; i++) {
        let num = nums2[i];

        if (map[num] > 0) {
            result.push(num);
            map[num]--;
        }
    }

    return result;
};