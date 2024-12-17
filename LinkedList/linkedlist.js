class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}





//-----------------------LinkedList-----------------------------------------------\\

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }


    //----------------------------------------------------------------------\\


    isEmpty() {
        return this.size == 0
    }
    getSize() {
        return this.size
    }



    //---------------------------prepend-------------------------------------------\\  
    //O(1)
    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }




    //-------------------------------append(2)---------------------------------------\\

    //O(n)
    // append(value) {
    //     const node = new Node(value)
    //     if (this.isEmpty()) {
    //         this.head = node
    //     } else {
    //         let curr = this.head
    //         while (curr.next) {

    //             curr = curr.next
    //         }
    //         curr.next = node
    //     }
    //     this.size++
    // }

    // o(1)
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node; // Set both head and tail to the new node
        } else {
            this.tail.next = node; // Link current tail to the new node
            this.tail = node; // Update tail reference to the new node
        }
        this.size++;
    }



    //-------------------------------insert---------------------------------------\\

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let curr = this.head
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next
            }
            node.next = curr.next
            curr.next = node
            this.size++
        }
    }


    //----------------------------------removeFromIndex------------------------------------\\


    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null
        }

        let removeNode
        if (index === 0) {
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = prev.next.next
        }
        this.size--
        return removeNode.value
    }



    //-------------------------------removeFromVlaue---------------------------------------\\


    removeValue(value) {
        if (this.isEmpty()) {
            return null
        }
        
        if (this.head.value === value) {
            this.head = this.head.next
            this.size--
            return value

        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }

            if (prev.next) {
                prev.next = prev.next.next
                // const removeNode = prev.next 
                // prev.next = removeNode.next // prev.next =prev.next.next 
                this.size--
                return value
            }
            return null
        }
    }


    //---------------------------------removefront-------------------------------------\\

    removeFromfront() {
        if (!this.head) {
            return null  //   because we want to remove 
        }
        // const value = this.head.value
        this.head = this.head.next   // head jumped to next 
        this.size--
        return value
    }

    //--------------------------tail-------removebaack-------------------------------------\\

    removeFromback() {
        if (!this.head) {
            return null
        }
        // const value = this.tail.value
        if (this.size == 1) {
            this.head = null
            this.tail = null
        } else {
            let prev = this.head
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }


    //------------------------------search----------------------------------------\\

    search(value) {
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }


    //----------------------------reverse------------------------------------------\\

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    //---------------------------dupilcates-------------------------------------------\\



    duplicates() {
        let curr = this.head
        while (curr && curr.next) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
    }


    //-------------------------------findmidle---------------------------------------\\


    findMiddle() {
        if (this.isEmpty()) {
            console.log("The list is empty.");
            return null;
        }

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        return slow.value


    }



    //------------------------------sum----------------------------------------\\

    sum() {
        if (this.isEmpty()) {
            console.log(0);
        } else {
            let current = this.head;
            let result = 0;
            while (current) {
                result += current.value
                current = current.next;
            }
            console.log(`Sum of all node values is ${result}`);
        }
    }


    //------------------------------print----------------------------------------\\


    print() {
        if (this.isEmpty()) {
            console.log("list is empty")
        } else {
            let curr = this.head
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}



//----------------------------------------------------------------------\\



const list = new LinkedList()
console.log('List is empty ? ', list.isEmpty())
// console.log("list size", list.getSize())

list.prepend(3)
list.append(5)
list.insert(4,1)


// list.prepend(10)
// list.removeValue(10)
// console.log("middle:", list.findMiddle())
// console.log(list.removeFrom(0))
// console.log(list.removeValue(260))
// console.log(list.removeValue(20))
// list.removeFrom(1)

// console.log(list.removeFrom(1))
// list.removeFromback()
// console.log(list.removeFromfront())
// list.duplicates()
// console.log("this is search =",list.search(30))
// list.reverse()
// console.log(list.getSize())
list.print()