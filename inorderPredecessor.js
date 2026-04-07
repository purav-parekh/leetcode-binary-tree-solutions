// Given a BST, return the inorder predecessor of val.

// not optimal - reverse inorder (descending array sorted)
const inorderPredecessor = (root,val) => {
  let ans = null;
  const dfs = (node) => {
    if(!node) return;
    
    dfs(node.right)
    
    if(ans !== null) return;
    
    if(node.val > val) {
      ans = node.val
      return;
    }
    
    dfs(node.left)
  }
  dfs(root)
  return ans
}

// optimal - goes either left or right = O(h)
const inorderPredecessor = (root,val) => {
  let predecessor = null;
  while(root !== null) {
    if(root.val < val) {
      predecessor = root.val
      root = root.right
    } else root = root.left
  }
  return predecessor
}
