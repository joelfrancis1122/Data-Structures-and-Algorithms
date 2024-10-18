class Stack {
    constructor() {
      this.arr = [];
    }
  
    // Add an value to the stack
    push(value) {
      this.arr.push(value);
    }
   
    // Remove and return the top value from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.arr.pop();
    }
  
    // Return the top value of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.arr[this.arr.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.arr.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.arr.length;
    }
  
    // Print the values of the stack
    
    print() {
      console.log(this.arr.toString());
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.pop()); // Output: 30
  stack.print(); // Output: 10,20,30
  // console.log(stack.peek()); // Output: 20
  // stack.print(); // Output: 10,20
  