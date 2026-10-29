/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
    let graph = Array.from({ length: n }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Step 1: Find parent, depth and traversal order
    let parent = Array(n).fill(-1);
    let depth = Array(n).fill(0);
    let order = [0];

    for (let i = 0; i < order.length; i++) {
        let u = order[i];

        for (let v of graph[u]) {
            if (v === parent[u]) continue;

            parent[v] = u;
            depth[v] = depth[u] + 1;
            order.push(v);
        }
    }

    // Step 2: Calculate subtree size and heavy child
    let size = Array(n).fill(1);
    let heavy = Array(n).fill(-1);

    for (let i = n - 1; i >= 0; i--) {
        let u = order[i];
        let maxSize = 0;

        for (let v of graph[u]) {
            if (parent[v] === u) {
                size[u] += size[v];

                if (size[v] > maxSize) {
                    maxSize = size[v];
                    heavy[u] = v;
                }
            }
        }
    }

    // Step 3: Heavy Light Decomposition
    let head = Array(n);
    let pos = Array(n);
    let timer = 0;
    let stack = [[0, 0]];

    while (stack.length) {
        let [start, h] = stack.pop();
        let u = start;

        while (u !== -1) {
            head[u] = h;
            pos[u] = timer++;

            for (let v of graph[u]) {
                if (parent[v] === u && v !== heavy[u]) {
                    stack.push([v, v]);
                }
            }

            u = heavy[u];
        }
    }

    // Step 4: Segment Tree
    let base = 1;
    while (base < n) base *= 2;

    let seg = Array(base * 2).fill(0);

    function getMask(ch) {
        return 1 << (ch.charCodeAt(0) - 97);
    }

    for (let i = 0; i < n; i++) {
        seg[base + pos[i]] = getMask(s[i]);
    }

    for (let i = base - 1; i >= 1; i--) {
        seg[i] = seg[i * 2] ^ seg[i * 2 + 1];
    }

    // Point update
    function update(index, value) {
        let p = base + index;
        seg[p] = value;

        while (p > 1) {
            p = Math.floor(p / 2);
            seg[p] = seg[p * 2] ^ seg[p * 2 + 1];
        }
    }

    // Range XOR query [l, r]
    function rangeQuery(l, r) {
        l += base;
        r += base;

        let result = 0;

        while (l <= r) {
            if (l % 2 === 1) result ^= seg[l++];
            if (r % 2 === 0) result ^= seg[r--];

            l = Math.floor(l / 2);
            r = Math.floor(r / 2);
        }

        return result;
    }

    // Step 5: XOR of path between two nodes
    function pathQuery(u, v) {
        let result = 0;

        while (head[u] !== head[v]) {
            if (depth[head[u]] < depth[head[v]]) {
                [u, v] = [v, u];
            }

            result ^= rangeQuery(pos[head[u]], pos[u]);
            u = parent[head[u]];
        }

        if (depth[u] > depth[v]) {
            [u, v] = [v, u];
        }

        result ^= rangeQuery(pos[u], pos[v]);

        return result;
    }

    // Step 6: Process queries
    let chars = s.split("");
    let answer = [];

    for (let q of queries) {
        let parts = q.split(" ");

        if (parts[0] === "update") {
            let u = Number(parts[1]);
            let ch = parts[2];

            chars[u] = ch;
            update(pos[u], getMask(ch));
        } else {
            let u = Number(parts[1]);
            let v = Number(parts[2]);

            let mask = pathQuery(u, v);

            answer.push((mask & (mask - 1)) === 0);
        }
    }

    return answer;
};