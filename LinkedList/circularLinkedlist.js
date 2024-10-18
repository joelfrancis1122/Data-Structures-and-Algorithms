class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class circularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    append(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.head = node
            node.next = node
        } else {
            let curr = this.head
            while (curr.next !== this.head) {
                curr = curr.next
            }
            curr.next = node
            node.next = this.head
        }
        this.size++
        console.log("Appended : ", value)
    }

    prepend(value) {
        const node = new Node(value)
        if (this.size === 0) {
            this.head = node
            node.next = node
        } else {
            let curr = this.head
            while (curr.next !== this.head) {
                curr = curr.next
            }
            node.next = this.head
            this.head = node
            curr.next = node

        }
        this.size++
        console.log("Prepended : ", value)
    }


    print() {
        if (this.size === 0) {
            console.log("The list is empty");
            return;
        } else {
            let curr = this.head;
            let listValues = `${curr.value} `;
            curr = curr.next;
            while (curr !== this.head) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log("List : ", listValues);
        }
    }
}

const circular = new circularLinkedList()

circular.print()
circular.prepend(10)
circular.prepend(20)
circular.append(30)
circular.prepend(50)
circular.append(90)
circular.append(340)
circular.print()