const LinkedList=require('./Linked-List')
class Stack {
  constructor() {
    this.list = new LinkedList();
  }
  push(value) {
    this.list.prepend(value);
  }
  pop() {
     return this.list.removeFromFront();
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.list.head.value
  }
  isEmpty(){
    return this.list.isEmpty()
  }
  print(){
    this.list.print()
  }
}
function removeEvenNumbers(stack){
    const oddStack=new Stack()
    while(!stack.isEmpty()){
        const element=stack.pop()
        if(element%2!==0){
            oddStack.push(element)
        }
    }
    return oddStack

}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(4)
stack.push(5)
stack.push(6)
stack.print()
const oddStack=removeEvenNumbers(stack)
oddStack.prinat()
stack.print()