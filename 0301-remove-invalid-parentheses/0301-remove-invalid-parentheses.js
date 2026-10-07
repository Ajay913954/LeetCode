/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let result = [];
    let queue = [s];
    let visited = new Set([s]);

    let found = false;

    while (queue.length > 0) {
        let current = queue.shift();

        if (isValid(current)) {
            result.push(current);
            found = true;
        }

        // Agar current level par valid answer mil gaya,
        // toh aur parentheses remove karne ki zarurat nahi.
        if (found) {
            continue;
        }

        for (let i = 0; i < current.length; i++) {
            // Sirf parentheses remove karenge
            if (current[i] !== '(' && current[i] !== ')') {
                continue;
            }

            let next = current.slice(0, i) + current.slice(i + 1);

            if (!visited.has(next)) {
                visited.add(next);
                queue.push(next);
            }
        }
    }

    return result;


    function isValid(str) {
        let balance = 0;

        for (let char of str) {
            if (char === '(') {
                balance++;
            } else if (char === ')') {
                balance--;

                if (balance < 0) {
                    return false;
                }
            }
        }

        return balance === 0;
    }
};