// Leetcode (https://leetcode.com/problems/range-sum-of-bst/description/)
// 938. Range Sum of BST

// Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

const rangeSumBST = (root,low,high) => {
  if(!root) return 0
  let visited = [root]
  let sum = 0
  while(visited.length) {
    let node = visited.pop()
    if(node.val <= high && node.val >= low) sum += node.val
    if(node.right) visited.push(node.right)
    if(node.left) visited.push(node.left)
  }
  return sum
}
