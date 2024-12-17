function heapSort(arr) {
  let length = arr.length;

  for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
    heapify(arr, length, i);
  }

  for (let i = length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
    console.log("as",arr, i, 0)
  }

  return arr;
}

function heapify(arr, length, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < length && arr[left] > arr[largest]) {
    // console.log(arr, left, length, "both left and length");
    largest = left;
  }
  if (right < length && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, length, largest);
  }
}

const arr = [15, 5, 20, 1, 17, 10, 30];
console.log("Org array:", arr);

heapSort(arr);
console.log("Sorted array:", arr);

