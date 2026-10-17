/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {

    // Step 1: Calculate digit sum
    function digitSum(num) {
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    // Step 2: Store number, digit sum and original index
    let arr = nums.map((num, index) => ({
        num: num,
        sum: digitSum(num),
        index: index
    }));

    // Step 3: Sort using custom comparator
    arr.sort((a, b) => {
        if (a.sum !== b.sum) {
            return a.sum - b.sum;
        }

        return a.num - b.num;
    });

    // Step 4: Find minimum swaps using cycles
    let visited = new Array(nums.length).fill(false);

    let swaps = 0;

    for (let i = 0; i < nums.length; i++) {

        // Already visited or already in correct position
        if (visited[i] || arr[i].index === i) {
            continue;
        }

        let cycleLength = 0;
        let j = i;

        while (!visited[j]) {

            visited[j] = true;

            j = arr[j].index;

            cycleLength++;
        }

        swaps += cycleLength - 1;
    }

    return swaps;
};