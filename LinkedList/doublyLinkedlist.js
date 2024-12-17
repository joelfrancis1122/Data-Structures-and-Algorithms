class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  

    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
      }
      this.size++;
    }
  
    removeFromFront() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  
    removeFromEnd() {
      if (this.isEmpty()) {
        return null;
      }
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  
    removeFromBack() {
      if (!this.head) {
        return null;
      }
  
      const value = this.tail.value;
  
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  
      this.size--;
      return value;
    }
  
    reverse() {
      let curr = this.head;
      let prev = null;
      
      while (curr) {
          // Swap the next and prev pointers
          let next = curr.next;
          curr.next = prev;
          curr.prev = next;
          // Move prev and curr one step forward
          prev = curr;
          curr = next;
      }
      
      // Swap head and tail
      this.tail = this.head;
      this.head = prev;
  }
  
  
    print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
  
    printReverse() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.tail;
        let list = "";
        while (curr) {
          list += `${curr.value}<->`;
          curr = curr.prev;
        }
        console.log(list);
      }
    }
  }
  
  
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.prepend(0);
  list.print();
  list.printReverse();
  list.removeFromEnd();
  list.print();
  list.removeFromFront();
  list.reverse()
  list.print();
  // list.removeFromBack()