/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    let rows = Array.from({ length: numRows }, () => "");

    let currentRow = 0;
    let direction = 1;

    for (let i = 0; i < s.length; i++) {

        rows[currentRow] += s[i];

        if (currentRow === 0) {
            direction = 1;
        }

        if (currentRow === numRows - 1) {
            direction = -1;
        }

        currentRow += direction;
    }

    return rows.join("");
};