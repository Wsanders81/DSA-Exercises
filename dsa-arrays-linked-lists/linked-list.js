/** Node: node for a singly linked list. */

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    for (let val of vals){ 
      this.push(val) 
      
    };
    
    
  }
    

  /** push(val): add new value to end of list. */
  traverse() {
    let currentNode = this.head; 
    while(currentNode){
      console.log(currentNode.val)
      currentNode = currentNode.next
    }
  }
  push(val) {
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode; 
      this.tail = newNode; 
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length += 1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    if(!this.head){
      this.head = newNode; 
      this.tail = newNode; 
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length += 1
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.head) {
      return console.log('nothing here!')
    } else if(this.length === 1){
      const val = this.head.val
      this.head = null; 
      this.tail = null; 
      this.length = 0; 
      return val
    }
    
    else {
      let currentNode = this.head
      while(currentNode.next){
        if(currentNode.next === this.tail){
          const popVal = this.tail.val; 
          this.tail = currentNode; 
          currentNode.next = null; 
          this.length -= 1; 
          return popVal; 
        }
        currentNode = currentNode.next
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      return console.log('nothing here!')
    } else if(this.length <= 1) {
      const shiftVal = this.head.val; 
      this.head = null; 
      this.tail = null; 
      this.length -= 1; 
      return shiftVal; 
    }
     else {
      const shiftVal = this.head.val
      this.head = this.head.next
      
      this.length -= 1; 
      return shiftVal
    }
    
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentIdx = 0; 
    let currentNode = this.head; 
    while(currentNode){
      if(idx === 0) return currentNode.val
      currentIdx += 1
      currentNode = currentNode.next
      if(currentIdx === idx) {
        return currentNode.val
      }
    }
    
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentIdx = 0; 
    let currentNode = this.head; 
    if(idx === 0) {
      this.head.val = val
    }
    while(currentNode){
     
      currentIdx += 1
      currentNode = currentNode.next
      if(currentIdx === idx) {
        currentNode.val = val
        return
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentIdx = 0; 
    let currentNode = this.head; 
    let previousNode; 
    const newNode = new Node(val)
    if(idx === 0){
      newNode.next = currentNode
      this.head = newNode
      this.tail = newNode
      this.length += 1;
      return
    }
    while(currentNode){
      currentIdx += 1; 
      previousNode = currentNode; 
      currentNode = currentNode.next
      if(currentIdx === idx){
        if(idx === this.length ){
          this.tail = newNode
          
        }
        newNode.next = previousNode.next
        previousNode.next = newNode
        this.length += 1; 
        return
      }

    }
    
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentIdx = 0; 
    let currentNode = this.head; 
    let previousNode; 
    
    if(idx === 0){
      this.head = currentNode.next
      this.length -= 1; 
      if(this.length === 0){
        this.head = null; 
        this.tail = null; 
      }
      return currentNode.val
    }
    while(currentNode){
      currentIdx += 1; 
      previousNode = currentNode; 
      currentNode = currentNode.next
      if(currentIdx === idx){
        previousNode.next = currentNode.next
        
        this.length -= 1; 
        if(this.length === 1){
          this.head = null; 
          this.tail = null; 
        }
        return currentNode.val
      }

    }
    
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0
    let total = 0; 
    let currentNode = this.head; 
    while(currentNode){
      total += currentNode.val
      currentNode = currentNode.next; 


    }
    
    return total / this.length
  }
  
}
// let list = new LinkedList([1,2,3,4])
// console.log(list)


// module.exports = LinkedList;
