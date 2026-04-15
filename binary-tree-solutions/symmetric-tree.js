// LeetCode: 101 - Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// The idea here is to use a queue and check only two elements at a time. If the elements are same, we then check the children of these elements so on and so forth. 
// If at any point the node values do not match, we return false

const isSymmetric = root => {
  let q = []
  q.push(root.left)
  q.push(root.right)
  while(stack.length) {
    let lnode = q[0]  // assign the left node
    q.shift() // remove the left node as it is assigned to lnode
    let rnode = q[0] // assign the right node
    q.shift() // remove the right node as it is assigned to rnode
    if(!lnode && !rnode) continue; // if they are the leaf node, continue to check other nodes
    if(!lnode || !rnode) return false // if only one of the nodes is a leaf node, return false
    if(lnode.val !== rnode.val) return false
    else {
      stack.push(lnode.left)
      stack.push(rnode.right)
      stack.push(lnode.right)
      stack.push(rnode.left)
    }
  }
  return true
}
