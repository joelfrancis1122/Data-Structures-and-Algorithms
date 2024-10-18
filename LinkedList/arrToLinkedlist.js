class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(value) {
        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {

        const node = new Node(value)
        if (!this.head) {
            this.head = node
        } else {
            let curr = this.head

            while (curr.next) {
                curr = curr.next
            }

            curr.next = node
            this.size++
        }

    }
    print() {
        let current = this.head;
        let output = "";
        while (current) {
            output += current.value + " -> ";
            current = current.next;
        }
        console.log(output + "null");
    }
}

const list = new LinkedList();
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = arr.length - 1; i >= 0; i--) {
//     linkedList.prepend(arr[i]);
// }
for (i = 0; i <= arr.length - 1; i++) {
    list.append(arr[i])
}















list.print();