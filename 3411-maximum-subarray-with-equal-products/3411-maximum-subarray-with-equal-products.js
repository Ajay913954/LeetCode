/**
 * @param {number[]} nums
 * @return {number}
 */

var maxLength = function(nums) {

    // GCD function
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    let n = nums.length;
    let answer = 0;

    // Select starting index
    for (let i = 0; i < n; i++) {

        let product = 1n;
        let currentGcd = 0;
        let currentLcm = 1;

        // Select ending index
        for (let j = i; j < n; j++) {

            let num = nums[j];

            // Update product
            product *= BigInt(num);

            // Update GCD
            currentGcd = gcd(currentGcd, num);

            // Update LCM
            let common = gcd(currentLcm, num);

            currentLcm = (currentLcm / common) * num;

            // Check product equivalent
            let value = BigInt(currentGcd) *
                        BigInt(currentLcm);

            if (product === value) {
                answer = Math.max(answer, j - i + 1);
            }
        }
    }

    return answer;
};
