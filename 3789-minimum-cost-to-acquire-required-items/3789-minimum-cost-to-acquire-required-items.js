/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {

    // Option 1: Buy separately
    let option1 = need1 * cost1 + need2 * cost2;

    // Option 2: Buy shared items for minimum requirement
    let common = Math.min(need1, need2);

    let option2 = common * costBoth;

    option2 += (need1 - common) * cost1;
    option2 += (need2 - common) * cost2;

    // Option 3: Buy shared items for maximum requirement
    let option3 = Math.max(need1, need2) * costBoth;

    return Math.min(option1, option2, option3);
};