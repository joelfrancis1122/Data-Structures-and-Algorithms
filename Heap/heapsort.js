function heapSort(arr) {
    // Build a max heap
    buildMaxHeap(arr);

    // Extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (max element) with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reduce the heap size and heapify the root
        heapifyMax(arr, 0, i);
    }
}

// Build a max heap from the array
function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length- 1 / 2) ; i >= 0; i--) {
        heapifyMax(arr, i, arr.length);
    }
}

// Max-heapify function
function heapifyMax(arr, index, heapSize) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largest = index;

    if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largest]) {
        largest = leftChildIndex;
    }

    if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largest]) {
        largest = rightChildIndex;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapifyMax(arr, largest, heapSize);
    }
}

// Example usage
let arr = [12, 34, 56, 54, 98, 67, 5, 7, 3, 0, 54];
heapSort(arr);
console.log(arr); // Output: [0, 3, 5, 7, 12, 34, 54, 54, 56, 67, 98]
 