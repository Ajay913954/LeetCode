/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    let result = new Array(n).fill(0);
    let stack = [];
    let prevTime = 0;

    for (let i = 0; i < logs.length; i++) {
        let parts = logs[i].split(":");

        let id = Number(parts[0]);
        let type = parts[1];
        let time = Number(parts[2]);

        if (type === "start") {
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime;
            }

            stack.push(id);
            prevTime = time;
        } else {
            result[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return result;
};