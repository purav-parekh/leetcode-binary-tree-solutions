// 104. Maximum Depth of Binary Tree

//Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

const maxDepth = root => {
  if(!root) return 0;
  let q = [root];
  let max = 0;
  while(q.length) {
    let len = q.length;
    for(let i =0;i<len;i++){
      let node = q.shift();
      if(node.left) q.push(node.left);
      if(node.right) q.push(node.right);
    }
    max++;
  }
  return max;
}
