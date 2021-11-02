/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(!this.root) return 0; 
    let toVisitStack = [this.root]
    let total = 0; 
    while(toVisitStack.length){
      const current = toVisitStack.pop()
      total += current.val
      for(let child of current.children) {
        toVisitStack.push(child)
      }
    }
    return total
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0; 

    let toVisitQueue = [this.root]
    let total = 0 ;
    while(toVisitQueue.length){
      const current = toVisitQueue.shift()
      console.log(current)
      if(current.val % 2 === 0) total += 1
      for(let child of current.children) {
        console.log(child)
        toVisitQueue.push(child)
      }
    }
    return total; 
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0; 

    let toVisitStack = [this.root]
    let totalGreaterThan = 0; 
    while(toVisitStack.length){
      const current = toVisitStack.pop()
      console.log(current)
      if(current.val > lowerBound) totalGreaterThan += 1; 
      for(let child of current.children) {
        toVisitStack.push(child)
      }
    }
    return totalGreaterThan; 

  }
}
const treeNodes = new TreeNode(1, [new TreeNode(2), new TreeNode(3), new TreeNode(4, [new TreeNode(5), new TreeNode(6), new TreeNode(7)]) ])
const tree = new Tree(treeNodes)
console.log(tree.numGreater(1))
module.exports = { Tree, TreeNode };
