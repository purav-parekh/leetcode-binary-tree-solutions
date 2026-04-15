// Given a BST, return the inorder successor of val.
// Leetcode - 285 (Premium)

// not optimal
const inorderSuccessor = (root,val) => {
  let ans = null;
  const dfs = (node) => {
    if(!node) return;
    
    dfs(node.left)
    
    if(ans !== null) return;
    
    if(node.val > val) {
      ans = node.val
      return;
    }
    
    dfs(node.right)
  }
  dfs(root)
  return ans
}

// optimal - goes either left or right = O(h)
const inorderSuccessor = (root,val) => {
  let successor = null;
  while(root !== null) {
    if(root.val > val) {
      successor = root.val
      root = root.left
    } else root = root.right
  }
  return successor
}
