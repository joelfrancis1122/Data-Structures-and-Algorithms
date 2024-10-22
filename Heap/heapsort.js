function heapSort(arr) {
  let length = arr.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
    console.log(arr, i, 0,"odi")
  }

  // Extract elements from heap one by one
  for (let i = length - 1; i > 0; i--) {
    // Move the current root (largest) to the end
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }

  return arr;
}

// To heapify a subtree rooted with node i, length is the size of the heap
function heapify(arr, length, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < length && arr[left] > arr[largest]) {
    console.log(arr,left,length,"both left and length")
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If largest is not root, swap and continue heapifying
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    // Recursively heapify the affected subtree
    heapify(arr, length, largest);
  }
}

// Example usage
const arr = [5,4,3,2,1];
console.log("Original array:", arr);

heapSort(arr);
console.log("Sorted array:", arr);






