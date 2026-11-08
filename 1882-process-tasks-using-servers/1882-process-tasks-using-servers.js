/**
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {

    class MinHeap {
        constructor(compare) {
            this.heap = [];
            this.compare = compare;
        }

        push(value) {
            this.heap.push(value);
            let i = this.heap.length - 1;

            while (i > 0) {
                let p = Math.floor((i - 1) / 2);

                if (!this.compare(this.heap[i], this.heap[p])) break;

                [this.heap[i], this.heap[p]] =
                [this.heap[p], this.heap[i]];

                i = p;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            let result = this.heap[0];
            this.heap[0] = this.heap.pop();

            let i = 0;

            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < this.heap.length &&
                    this.compare(this.heap[left], this.heap[smallest])) {
                    smallest = left;
                }

                if (right < this.heap.length &&
                    this.compare(this.heap[right], this.heap[smallest])) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                [this.heap[smallest], this.heap[i]];

                i = smallest;
            }

            return result;
        }

        peek() {
            return this.heap[0];
        }

        size() {
            return this.heap.length;
        }
    }

    // Available servers: weight, then index
    let available = new MinHeap((a, b) =>
        a[0] < b[0] || (a[0] === b[0] && a[1] < b[1])
    );

    // Busy servers: free time, then index
    let busy = new MinHeap((a, b) =>
        a[0] < b[0] || (a[0] === b[0] && a[1] < b[1])
    );

    // Initially all servers are available
    for (let i = 0; i < servers.length; i++) {
        available.push([servers[i], i]);
    }

    let ans = [];
    let time = 0;

    for (let i = 0; i < tasks.length; i++) {

        time = Math.max(time, i);

        // Move free servers into available heap
        while (busy.size() > 0 && busy.peek()[0] <= time) {
            let [freeTime, index] = busy.pop();
            available.push([servers[index], index]);
        }

        // Wait if no server is available
        if (available.size() === 0) {
            time = busy.peek()[0];

            while (busy.size() > 0 && busy.peek()[0] <= time) {
                let [freeTime, index] = busy.pop();
                available.push([servers[index], index]);
            }
        }

        // Select best available server
        let [weight, index] = available.pop();

        ans.push(index);

        // Add server to busy heap
        busy.push([time + tasks[i], index]);
    }

    return ans;
};