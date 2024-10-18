class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (!this.root) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else if (node.value > root.value) {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return null
        } else {
            if (root.value == value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preorder(root) {
        if (root) {
            console.log(root.value)
            console.log('mmmmmmmmmmmmmm')
            this.preorder(root.left)
            console.log('??????????')
            this.preorder(root.right)
        }
    }

    inorder(root) {
        if (root) {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }

    postorder(root) {
        if (root) {
            this.postorder(root.left)
            this.postorder(root.right)
            console.log(root.value)
        }
    }

    bfs() {
        const queue = {}
        let front = 0
        let rear = 0
        queue[rear] = this.root
        rear++

        while (rear - front != 0) {
            let cur = queue[front]
            delete queue[front]
            front++
            console.log(cur.value)
            if (cur.left) {
                queue[rear] = cur.left
                rear++
                // queue.push(cur.left)
            }
            if (cur.right) {
                queue[rear] = cur.right
                rear++
                // queue.push(cur.right)
            }
        }
    }

    zigZagTraversal() {
        const queue = []
        queue.push(this.root)
        const result = []
        let leftToRight = true
        while (queue.length) { 
            const limit = queue.length
            const currentLevel = []
            for (let i = 0; i < limit; i++) {
                const currentNode = queue.shift()
                if (leftToRight) {
                    currentLevel.push(currentNode.value)
                } else {
                    currentLevel.unshift(currentNode.value)
                }
                if (currentNode.left) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
            result.push(currentLevel);
            leftToRight = !leftToRight;
        }
        console.log(result)
    }

    findDepth(root, key) {
        return this.findDepthHelper(root, key, 0)
    }

    findDepthHelper(node, key, depth) {
        if (node == null) {
            return -1
        }
        if (node.value == key) {
            return depth
        }
        if (key < node.value) {
            return this.findDepthHelper(node.left, key, depth + 1)
        } else {
            return this.findDepthHelper(node.right, key, depth + 1)
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        } else if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            } else if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            } else {
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right, root.value)
            }
        }
        return root
    }

    isValid(root, min = null, max = null) {
        if (!root) {
            return true
        }
        if ((min != null && root.value <= min) || (max != null && root.value >= max)) {
            return false
        }

        return (this.isValid(root.left, min, root.value) && (this.isValid(root.right, root.value, max)))
    }

    height(node = this.root) {
        if (!node) {
            return -1
        }
        let left = this.height(node.left)
        let right = this.height(node.right)
        return Math.max(left, right) + 1
    }

    secondLargest() {
        if (!this.root || (!this.root.right && !this.root.left)) {
            reutrn - 1
        }
        let current = this.root
        let parent = null

        while (current.right) {
            parent = current
            current = current.right
        }
        if (current.left) {
            current = current.left
            while (current.right) {
                current = current.right
            }
            return current.value
        }
        return parent.value
    }

    findSum() {
        return this.sum(this.root)
    }

    sum(root) {
        if (!root) {
            return 0
        }
        return root.value + this.sum(root.left) + this.sum(root.right)
    }
}
const bst = new binarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(11)
bst.insert(12)
// bst.delete(7)
// bst.insert(6)
// bst.insert(8)
// bst.preorder(bst.root)
// bst.inorder(bst.root)
// bst.postorder(bst.root)
bst.bfs()
// console.log(bst.max(bst.root))0.
// console.log(bst.search(bst.root, 7))
console.log('------------')
bst.zigZagTraversal()
console.log(bst.findDepth(bst.root, 7))
// console.log(bst.isValid(bst.root))
console.log(bst.height())
console.log('-------')
console.log(bst.secondLargest())