// Given the root of a binary tree, find the size of the largest subtree that is also a Binary Search Tree (BST).
// Note: Size of a BST means the number of nodes in the BST.

// Brute Force - do a Validate BST on every node, and store size everytime by updating max. return max
// Optimal - Do postorder, Find largest in left tree, and smallest in right sub tree, check if leftTreeVal < node < rightTreeVal, if yes return leftTreeSize + rightTreeSize + 1

const largestBST = root => {
  if(!root) return 0

  const postOrder = node => {
    if(!node) return [-Infinity,Infinity,0]
    let [lmax,lmin,lSize] = postOrder(node.left)
    let [rmax,rmin,rSize] = postOrder(node.right)
    
    if(lmax < node.val && node.val < rmin) return [Math.max(node.val,rmax),Math.min(node.val,lmin),lSize+rSize+1]
    return [Infinity,-Infinity,Math.max(lSize,rSize)]
  }
  return postOrder(root)[2]
}
