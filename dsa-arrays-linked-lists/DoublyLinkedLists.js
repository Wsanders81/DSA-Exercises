
class Node {
    constructor(val){
        this.val = val; 
        this.prev = null; 
        this.next = null; 
        
    }
}

class DoublyLinkedList {
    constructor(vals = []) {
        
        this.head = null;
        this.tail = null;

        this.length = 0;
        for (let val of vals){ 
        this.push(val) 
        
        };
    
    
  }

    traverse() {
        let currentNode = this.head; 
        while(currentNode){
          console.log(currentNode.val, this.length)
          currentNode = currentNode.next
          
        }
      }

      push(val) {
          let newNode = new Node(val)
          if(!this.length) {
              this.head = newNode; 
              this.tail = newNode; 
          } else {
              
              this.tail.next = newNode; 
              newNode.prev = this.tail
              
              this.tail = newNode; 
              
              
          } 
          this.length += 1; 
          return newNode; 
      }
      //** unshift(val): add new value to start of list */
      unshift(val){
        let newNode = new Node(val); 
        if(!this.head){
            this.head = newNode; 
            this.tail = newNode; 
        } else { 
            this.head.prev = newNode; 
            newNode.next = this.head
            this.head = newNode
        }
        this.length += 1; 
        return newNode; 
      }
      //** pop(): return & remove last item */
      pop(){
        if(!this.head){
            return console.log("nothing here!")
        } else if(this.length === 1){
                const val = this.head.val
                this.head = null; 
                this.tail = null; 
                this.length = 0; 
                return val
            }
        else {
            let currentNode = this.head; 
            while(currentNode.next) {
                if(currentNode.next === this.tail){
                    const popVal = this.tail.val; 
                    this.tail = currentNode; 
                    currentNode.next = null; 
                    this.length -= 1 ;
                    return popVal; 

                }
                currentNode = currentNode.next
            }
        }
      }
      //* return and remove first item
      shift() {
          if(!this.head){
              return console.log('nothing here!')
          } else if(this.length <= 1) {
              const shiftVal = this.head.val; 
              this.head = null; 
              this.tail = null; 
              this.length -= 1; 
              return shiftVal; 
          } else {
              const shiftVal = this.head.val
              this.head = this.head.next
              this.length -= 1; 
              return shiftVal
          }
      }
      //** get val at idx */
      getAt(idx){
          let currentIdx = 0; 
          let currentNode = this.head; 
          while(currentNode){
              if(idx === 0) return currentNode.val; 
              currentIdx += 1; 
              currentNode = currentNode.next; 
              if(currentIdx === idx){
                  return currentNode.val
              }
          }
      }
      //** set val at idx to val */
      setAt(idx, val){
        let currentIdx = 0; 
        let currentNode = this.head; 
        if(idx === 0){
            this.head.val = val; 
        }
        while(currentNode){
            currentIdx += 1; 
            currentNode = currentNode.next; 
            if(currentIdx === idx){
                currentNode.val = val
                return 
            }
        }
      }
      insertAt(idx, val){
          let currentIdx = 0; 
          let currentNode = this.head; 
          let previousNode; 
          const newNode = new Node(val);
          if(idx > this.length) return "out of range" 
          console.log(idx)
          if(idx === 0) {
              newNode.next = currentNode; 
              this.head = newNode; 
              this.tail = newNode; 
              this.length += 1; 
              return 
          }
          while(currentNode){
              currentIdx += 1; 
              previousNode = currentNode; 
              currentNode = currentNode.next; 
              if(currentIdx === idx){
                  if(idx === this.length){
                      console.log('tail')
                      this.tail = newNode
                      newNode.prev = previousNode; 
                      this.length += 1; 
                  }
                  newNode.next = previousNode.next; 
                  previousNode.next = newNode; 
                  newNode.prev = previousNode; 
                  this.length += 1
                  return newNode; 
              }
          }
      }
      removeAt(idx){
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
              return currentNode.val; 
          }
          while(currentNode.next){
              currentIdx += 1; 
              previousNode = currentNode ;
              currentNode = currentNode.next; 
              if(currentIdx === idx){
                  previousNode.next = currentNode.next; 
                  currentNode.next.prev = previousNode; 
                  this.length -= 1; 
                  if(this.length === 1){
                      this.head = null; 
                      this.tail = null; 
                  }
                  return currentNode
              }
              return "out of range"
          }
      }
      
}
let list = new DoublyLinkedList([1,2,3,4,5,6])
console.log(list.removeAt(2))

console.log(list)
list.traverse()
// console.log(list)