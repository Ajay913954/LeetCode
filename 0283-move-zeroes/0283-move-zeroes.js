/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let index = 0;

    //Non zero elements ko aage move karna hai 
    for(let i=0; i<nums.length;i++){
        if(nums[i] !== 0){
            nums[index] = nums[i];
            index++;
        }
    }

    //remaining positions par zero fill karna hia

    while (index<nums.length){
        nums[index] =0;
        index++;
    }
};