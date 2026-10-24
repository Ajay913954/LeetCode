/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    function convertDate(date) {
        let [month, day] = date.split("-").map(Number);

        let totalDays = day;

        for (let i = 0; i < month - 1; i++) {
            totalDays += daysInMonth[i];
        }

        return totalDays;
    }

    let a1 = convertDate(arriveAlice);
    let a2 = convertDate(leaveAlice);
    let b1 = convertDate(arriveBob);
    let b2 = convertDate(leaveBob);

    let start = Math.max(a1, b1);
    let end = Math.min(a2, b2);

    return Math.max(0, end - start + 1);
};