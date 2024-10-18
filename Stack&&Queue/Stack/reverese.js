class Stack {
    constructor() {
      this.arr = [];
    }
  
    // Add an element to the stack
    push(element) {
      this.arr.push(element);
    }
   
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.arr.pop();
    }
  
    // Return the top element of the stack without removing it
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
  
    // Print the elements of the stack
    reverse(str) {
        let stack = new Stack();
        for (let i = 0; i < str.length; i++) {
          stack.push(str[i]);
        }
        let reversed = '';
        while (!stack.isEmpty()) {
          reversed += stack.pop();
        }
        return reversed;
      }



    print() {
      console.log(this.arr.toString());
    }
  }
  
  // Example usage:
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  stack.print(); // Output: 10,20,30
  console.log(stack.pop()); // Output: 30
  console.log(stack.peek()); // Output: 20
  //   stack.reverse("joel")
  stack.print(); // Output: 10,20
  
  console.log(stack.reverse("joel"))


