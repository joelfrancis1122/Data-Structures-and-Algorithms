const { error } = require("console")

class stackusingqueue {
    constructor() {
        this.queue1 = []
        this.queue2 = []
    }
    push(value) {
        this.queue1.push(value)
    }
    pop() {
        if (this.queue1.length === 0) {
            throw new Error("stack is empty")
        }
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift())

        }
        const poppedvalue = this.queue1.shift();
        //console.log(this.queue1,this.queue2)
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return poppedvalue
        // if (this.queue1.length === 0) {
        //     throw new Error("Stack is empty");
        //   }
        //   while (this.queue1.length > 1) {
        //     this.queue2.push(this.queue1.shift());
        //   }
        //   const poppedValue = this.queue1.shift();
        // //   console.log(this.queue1,this.queue2)
        //   // Swap queue1 and queue2 correctly
        //   [this.queue1, this.queue2] = [this.queue2, this.queue1];

        //   return poppedValue;
    }

    peek() {
        if (this.queue1.length == 0) {
            throw new Error("stack is empty")
        }

        return this.queue1[this.queue1.length - 1]
    }
    display() {
        console.log("stack elements", this.queue1.concat(this.queue2).join(", "));
    }
}
const stack = new stackusingqueue()
stack.push(90)
stack.push(8)
stack.push(33)
stack.display()
console.log("popped elements", stack.pop())
stack.display()