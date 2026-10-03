/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (token === "+" || token === "-" || token === "*" || token === "/") {
            let b = stack.pop();
            let a = stack.pop();
            let result;

            if (token === "+") {
                result = a + b;
            } else if (token === "-") {
                result = a - b;
            } else if (token === "*") {
                result = a * b;
            } else {
                result = Math.trunc(a / b);
            }

            stack.push(result);
        } else {
            stack.push(Number(token));
        }
    }

    return stack.pop();
};