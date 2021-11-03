class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)
    if(!this.root){
       this.root = newNode
       return this; 
      }
    let currentNode = this.root
    while(currentNode.val !== val){
    
      if(currentNode.val > val) {
        if(!currentNode.left){
        currentNode.left = newNode
        return this 
        } 
        currentNode = currentNode.left;
        
      } 
      if(currentNode.val < val) {
        if(!currentNode.right){
          currentNode.right = newNode; 
          return this
        } 
         currentNode = currentNode.right
      }
    }
    return this
  
    
    
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode=this.root) {
    const newNode = new Node(val)
    if(!this.root){ 
      this.root = newNode
      currentNode = this.root
      return this; 
    }; 
    
    if(currentNode.val < val){
      if(!currentNode.right) currentNode.right = newNode
      this.insertRecursively(val, currentNode.right)
    }
    if(currentNode.val > val){
      if(!currentNode.left) currentNode.left = newNode
      this.insertRecursively(val, currentNode.left)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

   find(val) {
		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.val === val) return currentNode;

			if (currentNode.val > val) {
        console.log(currentNode.val)
				currentNode = currentNode.left;
			}
			else {
				currentNode = currentNode.right;
			}
		}
	}

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if(!currentNode) return undefined
    if(currentNode.val === val) return currentNode
    if(currentNode.val > val) return this.findRecursively(val, currentNode.left)
    if(currentNode.val < val) return this.findRecursively(val, currentNode.right)
    
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arrayOfVisitedNodes = []) {
    
    arrayOfVisitedNodes.push(node.val)
    if(node.left) this.dfsPreOrder(node.left, arrayOfVisitedNodes)
    if(node.right) this.dfsPreOrder(node.right, arrayOfVisitedNodes)

    return arrayOfVisitedNodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arrayOfVisitedNodes = []) {
    if(node.left) this.dfsInOrder(node.left, arrayOfVisitedNodes)
    arrayOfVisitedNodes.push(node.val)
    if(node.right) this.dfsInOrder(node.right, arrayOfVisitedNodes)
    return arrayOfVisitedNodes
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arrayOfVisitedNodes = []) {
    if(node.left) this.dfsPostOrder(node.left, arrayOfVisitedNodes)
    if(node.right) this.dfsPostOrder(node.right, arrayOfVisitedNodes)
    arrayOfVisitedNodes.push(node.val)
    return arrayOfVisitedNodes
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root; 
    let toVisitQueue = []
    let visited = []
    toVisitQueue.push(node)
    while(toVisitQueue.length){
      
      node = toVisitQueue.shift(); 
      visited.push(node.val)
      if(node.left){
        toVisitQueue.push(node.left)
      }
      if(node.right){
        toVisitQueue.push(node.right)
      }
    }
    return visited
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}
let binarySearchTree = new BinarySearchTree()


binarySearchTree.insertRecursively(15);
binarySearchTree.insertRecursively(20);
binarySearchTree.insertRecursively(10);
binarySearchTree.insertRecursively(12)
console.log(binarySearchTree.root.left.right.val)
console.log(binarySearchTree.bfs())
// console.log(binarySearchTree.dfsPreOrder())
// console.log(binarySearchTree.dfsInOrder())
// console.log(binarySearchTree.dfsPostOrder())
// console.log(binarySearchTree)

module.exports = BinarySearchTree;
