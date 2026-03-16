// Leetcode 545 - Premium Q
// Q: Given the root of a binary tree, return the boundary traversal of the tree in anti-clockwise direction starting from the root.
// The boundary includes three parts:

// Left Boundary
// Nodes from the root to the left-most node, excluding leaves.

// Leaf Nodes
// All leaf nodes from left to right.

// Right Boundary
// Nodes from the right-most node up to the root, excluding leaves, added in reverse order.

// The root should appear only once.

// Example
// Input
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7
//       / \
//      8   9
// Output
// [1, 2, 4, 8, 9, 6, 7, 3]

const boundary = root => {
  if(!root) return []
  let lB = []
  let leaves = []
  let rB = []
  
  const isLeaf = (node) => {
    if(!node.left && !node.right) return true
    else return false
  }
  
  const leftB = (node) => {
    if(!node) return null
    if(!isLeaf(node)) {
      if(node.left) {
        lB.push(node.val)
        leftB(node.left)
      } else if(node.right) {
        lB.push(node.val)
        leftB(node.right)
      } 
    }
  }
  const addLeaves = node => {
    if(!node) return null
    if(isLeaf(node) && node !== root) {
      leaves.push(node.val)
    }
    if(node.left) addLeaves(node.left)
    if(node.right) addLeaves(node.right)
  }
  const rightB = (node) => {
    if(!node) return null
    if(!isLeaf(node)) {
      if(node.right) {
        rB.push(node.val)
        rightB(node.right)
      } else if(node.left) {
        rB.push(node.val)
        rightB(node.left)
      }
    }
  }
  leftB(root.left)
  addLeaves(root)
  rightB(root.right)
  return [root.val,...lB,...leaves,...rB.reverse()]
}
