// Given a binary tree, return the right side view of the tree.
// binary tree <--- view from this side

const rightSide = (root) => {
  if(!root) return []
  let q = [root]
  let res = []
  while(q.length) {
    let size = q.length
    for(let i =0;i<size;i++) {
      let node = q.shift()
      if(i === size-1) res.push(node.val)
      if(node.left) q.push(node.left)
      if(node.right) q.push(node.right)
    }
  }
  return res
}

// Given a binary tree, return the left side view of the tree.
// view from this side ---> binary tree 

const leftSide = (root) => {
  if(!root) return []
  let q = [root]
  let res = []
  while(q.length) {
    let size = q.length
    for(let i =0;i<size;i++) {
      let node = q.shift()
      if(i === 0) res.push(node.val)
      if(node.left) q.push(node.left)
      if(node.right) q.push(node.right)
    }
  }
  return res
}
