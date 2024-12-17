class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root, min = null, max = null) {
    if (!root) {
        return true;
    }

    // Check if the current node's value is within the valid range
    if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
        return false;
    }

    // Recursively check the left and right subtrees
    return (
        isValidBST(root.left, min, root.value) &&
        isValidBST(root.right, root.value, max)
    );
}

// Example Usage:
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // Output: true
