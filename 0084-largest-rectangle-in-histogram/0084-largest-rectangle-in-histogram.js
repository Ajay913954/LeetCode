/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        let currentHeight = (i === heights.length) ? 0 : heights[i];

        while (
            stack.length > 0 &&
            currentHeight < heights[stack[stack.length - 1]]
        ) {
            let height = heights[stack.pop()];

            let width;

            if (stack.length === 0) {
                width = i;
            } else {
                width = i - stack[stack.length - 1] - 1;
            }

            let area = height * width;

            maxArea = Math.max(maxArea, area);
        }

        stack.push(i);
    }

    return maxArea;
};