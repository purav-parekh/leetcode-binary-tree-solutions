// Given a BST, return the inorder successor of val.
// Leetcode - 285 (Premium)

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
