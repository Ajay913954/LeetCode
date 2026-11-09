/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {

    // Min Heap: [finishTime, serverIndex]
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (this.heap[p][0] <= val[0]) break;

                this.heap[i] = this.heap[p];
                i = p;
            }

            this.heap[i] = val;
        }

        pop() {
            let root = this.heap[0];
            let last = this.heap.pop();

            if (this.heap.length > 0) {
                let i = 0;

                while (2 * i + 1 < this.heap.length) {
                    let child = 2 * i + 1;

                    if (
                        child + 1 < this.heap.length &&
                        this.heap[child + 1][0] < this.heap[child][0]
                    ) {
                        child++;
                    }

                    if (last[0] <= this.heap[child][0]) break;

                    this.heap[i] = this.heap[child];
                    i = child;
                }

                this.heap[i] = last;
            }

            return root;
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }
    }

    // Segment Tree
    let size = 1;

    while (size < k) {
        size *= 2;
    }

    let tree = new Array(2 * size).fill(0);

    // Initially all servers are available
    for (let i = 0; i < k; i++) {
        tree[size + i] = 1;
    }

    for (let i = size - 1; i > 0; i--) {
        tree[i] = tree[2 * i] + tree[2 * i + 1];
    }

    // Update server availability
    function update(index, value) {
        let p = size + index;
        tree[p] = value;

        while (p > 1) {
            p = Math.floor(p / 2);
            tree[p] = tree[2 * p] + tree[2 * p + 1];
        }
    }

    // Find first available server in range
    function findFirst(node, l, r, ql, qr) {
        if (r < ql || l > qr || tree[node] === 0) {
            return -1;
        }

        if (l === r) {
            return l;
        }

        let mid = Math.floor((l + r) / 2);

        let left = findFirst(
            2 * node, l, mid, ql, qr
        );

        if (left !== -1) return left;

        return findFirst(
            2 * node + 1, mid + 1, r, ql, qr
        );
    }

    let busy = new MinHeap();
    let count = new Array(k).fill(0);

    for (let i = 0; i < arrival.length; i++) {

        let time = arrival[i];

        // Release completed servers
        while (
            busy.size() > 0 &&
            busy.peek()[0] <= time
        ) {
            let [endTime, server] = busy.pop();
            update(server, 1);
        }

        let start = i % k;

        // Find server from start to end
        let server = findFirst(1, 0, size - 1, start, k - 1);

        // If not found, search from beginning
        if (server === -1) {
            server = findFirst(1, 0, size - 1, 0, start - 1);
        }

        // All servers busy: drop request
        if (server === -1) {
            continue;
        }

        // Assign request
        count[server]++;
        update(server, 0);

        busy.push([
            time + load[i],
            server
        ]);
    }

    // Find busiest servers
    let max = Math.max(...count);

    let ans = [];

    for (let i = 0; i < k; i++) {
        if (count[i] === max) {
            ans.push(i);
        }
    }

    return ans;
};