/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; 
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val)
    if(this.size === 0){
      this.first = newNode; 
      this.last = newNode;
      this.size += 1; 
      return 
    }
    this.first.prev = newNode; 
    newNode.next = this.first; 
    this.first = newNode; 
    this.size += 1; 
    return
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    try {
      if(!this.size) throw new Error("Nothing here!")
      const returnVal = this.first.val
      // let nextNode = this.first.next; 
      // nextNode.prev = null; 
      this.first = this.first.next
      
      this.size -= 1; 
      return returnVal; 
    } catch(e) {throw e}
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(!this.size) return null
    // if(!this.size) throw new Error("Nothing here!")
    return this.first.val
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0; 
  }
}

const s = new Stack()
s.push(1)
s.push(2)
s.push(3)
// s.pop()
console.log(s.pop())
console.log(s.size)
console.log(s)
// console.log(s.isEmpty())

module.exports = Stack;
