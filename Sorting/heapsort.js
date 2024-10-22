function sort(arr) {
  let length = arr.length;
  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }

  return arr;
}

function heapify(arr, length, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  let largest = i;

  // Compare the parent with the left child
  if (left < length && arr[left] > arr[largest]) {
    largest = left;
  }

  // Compare the largest so far (parent or left child) with the right child
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }

  // If the largest is not the parent, swap and continue heapifying
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }
}

let arr = [12, 11, 13, 0, 5, 6, -1];

// let arr=['ambu','cibin','akr','zed','elizabeth']
console.log(sort(arr));
