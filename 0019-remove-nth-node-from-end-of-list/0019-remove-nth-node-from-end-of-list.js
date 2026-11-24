/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {

    // Step 1: Create dummy node
    let dummy = new ListNode(0);
    dummy.next = head;

    // Step 2: Create two pointers
    let fast = dummy;
    let slow = dummy;

    // Step 3: Move fast n + 1 steps
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Step 4: Move both pointers
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Step 5: Delete the node
    slow.next = slow.next.next;

    // Step 6: Return updated head
    return dummy.next;
};
