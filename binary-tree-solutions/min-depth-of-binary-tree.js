// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

const minDepth = root => {
  if(!root) return 0;
  let min = 1;
  let q = [root];
  while(q.length) {
    let len = q.length;
    for(let i =0;i<len;i++){
      let node = q.shift();
      if(!node.left && !node.right) return min;
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
    min++;
  }
  return min
}
