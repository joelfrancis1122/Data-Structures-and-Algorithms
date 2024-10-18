class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size;
    }
    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head
            this.head = node;
        }
        this.size++
    }
    append(value) {
        let node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++;
    }
    print() {
        if (this.isEmpty()) {
            return;
        } else {
            let curr = this.head;
            let listValues = ''
            while (curr) {
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }

    }
}


let list1=new linkedList()
let list2 =new linkedList()

function palindrome(pali){
    for(let i=0;i<pali.length;i++){
        
        list1.append(pali[i])
        list2.prepend(pali[i])
    }
   let curr1=list1.head;
   let curr2=list2.head;


    while(curr1 && curr2){
        if(curr1.value===curr2.value){
            curr1=curr1.next;
            curr2=curr2.next;
        }else{
            list1.print()
            list2.print()
            return false;
        }
       
    }
   list1.print()
    list2.print()
    return true
   
}


console.log(palindrome("MALAYALAM"));