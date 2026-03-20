// Given a binary tree, return the top view of the tree.
// use a Q and a Map
// store the node val and which "y coordinate" the node belongs to

var topView = function(root) {
    if (!root) return [];

    let q = [[root, 0]];
    let map = new Map();

    while (q.length) {
        let [node, line] = q.shift();

        if (!map.has(line)) {
            map.set(line, node.val);
        }

        if (node.left) q.push([node.left, line - 1]);
        if (node.right) q.push([node.right, line + 1]);
    }

    return Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([_, val]) => val);
};

// Given a binary tree, return the bottom view of the tree.
// use a Q and a Map
// store the node val and which "y coordinate" the node belongs to
// same as top view, except we replace the node in map

var bottomView = function(root) {
    if (!root) return [];

    let q = [[root, 0]];
    let map = new Map();

    while (q.length) {
        let [node, line] = q.shift();
      
        map.set(line, node.val);

        if (node.left) q.push([node.left, line - 1]);
        if (node.right) q.push([node.right, line + 1]);
    }

    return Array.from(map.entries())
        .sort((a, b) => a[0] - b[0])
        .map(([_, val]) => val);
};
