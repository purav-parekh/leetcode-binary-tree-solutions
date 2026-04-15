// Given a binary tree, convert the tree such that every node's value is equal to the sum of its left and right nodes.
// not on leetcode
//
//         8                 
//       /   \
//     21     55
//    / \     / \
//   8  13   21 34

//         |
//         |
//         |
//        \ /

//         76
//       /    \
//     21      55
//    / \     /  \
//   8  13   21  34

const childSum = root => {
  
  const dfs = (node) => {
    if(!node) return ;
    let childSum = (node.left?.val || 0) + (node.right?.val || 0)
    // fix before going down
    if(childSum > node.val) {
      node.val = childSum
    } else {
      if(node.left) node.left.val = childSum
      if(node.right) node.right.val = childSum
    }
    // recurse
    dfs(left)
    dfs(right)
    //fix after coming from down
    let totalSum =  (node.left?.val || 0) + (node.right?.val || 0)
    if(node.left || node.right) {
      node.val = totalSum
    }
  }
  dfs(root)
  return root
}
