const { error } = require("console")

class queueusingstack{
    constructor()
    {
        this.stack1=[]
        this.stack2=[]
    }
    enqueue(value)
    {
        this.stack1.push(value)
    }
    dequeue()
    {
        if(this.stack2.length==0)
        {
            if(this.stack1.length==0)
            {
                throw new error("stack is empty")
            }
        }
        while(this.stack1.length>0)
        {
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }

    peek()
    {
          if(this.stack2.length==0)
        {
            if(this.stack1.length==0)
            {
                throw new error("stack is empty")
            }
        }
        while(this.stack1.length>0)
        {
            this.stack2.push(this.stack1.pop())
        }

        return this.stack2[this.stack2.length-1]
        
    }

    isEmpty()
    {
        return this.stack1.length==0&this.stack2.length==0
    }
    display() {
        let displayStack = [...this.stack2].reverse().concat(this.stack1);
        console.log("Queue elements: " + displayStack.join(', '));
      }
}
const queue=new queueusingstack()
queue.enqueue(10)
queue.enqueue(1)
queue.enqueue(20)
queue.display()
console.log("dequeueu",queue.dequeue())
queue.display()