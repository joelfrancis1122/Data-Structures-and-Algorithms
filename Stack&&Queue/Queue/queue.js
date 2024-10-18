
class Queue{
    constructor(){
        this.arr = []
    }

    enqueue(value){
       this.arr.push(value)
    }

    dequeue(){
        return this.arr.shift()
    }


    isEmpty(){
        return this.arr.length === 0
    }
    size(){
        return this.arr.length
    }

    peek(){
        if(!this.isEmpty()){
            return this.arr[0]
        }
        return null
    }

    print(){
        console.log(this.arr.toString())
    }
}

const queue = new Queue()

console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek())
