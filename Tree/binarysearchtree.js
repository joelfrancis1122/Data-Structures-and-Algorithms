class Node{
    constructor(value){
        this.value = value 
        this.left = null
        this.right = null
    }
}

    class BinarySearchTree{
        constructor(){
            this.root = null
        }
        isEmpty(){
            return this.root === null
        }
        insert(value){
            const node = new Node(value)
            if(!this.root){
                this.root = node
            }else{
                this.insertNode(this.root,node)
            }
        }

        insertNode(root, node) {
            if (node.value < root.value) {
                if (root.left === null) {
                    root.left = node;
                } else {
                    this.insertNode(root.left, node);
                }
            } else {
                if (root.right === null) {
                    root.right = node;
                } else {
                    this.insertNode(root.right, node);
                }
            }
        }
        
        
        search(root, value) {
            if (!root) {
                return false;
            } else {
                if (root.value === value) {
                    return true;
                } else if (value < root.value) {
                    return this.search(root.left, value);
                } else {
                    return this.search(root.right, value);
                }
            }
        }
        
        // DFS TRAVERSAL 

        preOrder(root){
            if(root){
                console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
        }
        inOrder(root){
            if(root){
                this.inOrder(root.left)
                console.log(root.value)
                this.inOrder(root.right)
            }
        }
        postOrder(root){
            if(root){
                this.postOrder(root.left)
                this.postOrder(root.right)
                console.log(root.value)
            }
        }

        // BFS TRAVERSAL 
        levelOrder(){
            //use the optimized queue implementation
            const queue =[]
            queue.push(this.root)

            while(queue.length){
                let curr = queue.shift()
                console.log(curr.value)
                if(curr.left){
                    queue.push(curr.left)
                }

                if(curr.right){
                    queue.push(curr.right)
                }
            }
        }


    


        min(root){
            if(!root.left){
                return root.value
            }else{
                return this.min(root.left)
            }
        }



        

        max(root){
            if(!root.right){
                return root.value
            }else{
                return this.max(root.right)
            }
        }   

        
        getHight(root){
            if(!root){
                return 0
            }
    
            const leftHight=this.getHight(root.left)
            const rightHight=this.getHight(root.right)
            return Math.max(leftHight,rightHight)+1
        }
        
        findHeight() {
            if (!this.root) {
                return 0; // An empty tree has a height of 0
            }
        
            let queue = [this.root];
            let height = 0;
        
            while (queue.length ) {
        
                for (let i = 0; i < queue.length; i++) {
                    let curr = queue.shift(); // Dequeue the front node
                      console.log(curr.value)
                    if (curr.left) {
                        queue.push(curr.left); // Enqueue the left child
                    }
        
                    if (curr.right) {
                        queue.push(curr.right); // Enqueue the right child
                    }
                }
        
                console.log(height,"sdasheight")
                height++; // Increment height after processing each level
            }
        
            return height;
        }
        


        delete(value){
            this.root = this.deleteNode(this.root,value)
        }
        deleteNode(root,value){
            if(!root){
                return root 
            }
            if(value < root.value){
                root.left = this.deleteNode(root.left,value)
            }else if (value>root.value){
                root.right = this.deleteNode(root.right,value)
            }else{
                if(!root.left&&!root.right){
                    return null
                }
                if(!root.left){
                    return root.right
                }else if (!root.right){
                    return root.left
                }
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right,root.value)
            }
            return root
        }
        // ---------------------------------------------



     displayLeaf(root){
        if (root) {
            if (!root.left && !root.right) {
                console.log(root.value);
            }
            this.displayLeaf(root.left);
            this.displayLeaf(root.right);
        }

     }



     isValidBST(root, min = -Infinity, max = Infinity) {
        if (!root) {
            return true; // An empty tree is a valid BST
        }

        // Check if the current node violates the BST properties
        if (root.value <= min || root.value >= max) {
            return false;
        }

        // Recursively check the left and right subtrees
        return (
            this.isValidBST(root.left, min, root.value) &&
            this.isValidBST(root.right, root.value, max)
        );
    }


    }




    const bst = new BinarySearchTree();
    console.log('Tree is empty:', bst.isEmpty()); // Tree is empty: true

    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(0);
    bst.root.value= 0;
    console.log(JSON.stringify(bst,null,2))
    // console.log(bst.search(bst.root, 10)); // true
    // console.log(bst.search(bst.root, 5)); // true
    // console.log(bst.search(bst.root, 15)); // true
    // console.log(bst.search(bst.root, 20)); // false
    console.log('------------------')
    // console.log('------------------')
    // bst.inOrder(bst.root)
    // console.log('------------------')
    // bst.postOrder(bst.root)
    // console.log('------------------')
    // bst.delete(3)
    // bst.preOrder(bst.root)
    // console.log("this is degree",bst.getHight(bst.root))
    
    // bst.levelOrder()
    // console.log('min=>',bst.min(bst.root))
    // console.log('max=>',bst.max(bst.root))
    // bst.displayLeaf(bst.root);
    console.log(bst.isValidBST(bst.root))
    bst.levelOrder()