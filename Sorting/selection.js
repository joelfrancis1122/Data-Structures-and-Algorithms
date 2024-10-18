// ### 2. Selection Sort
// - *Best Case:* O(n^2)
// - *Average Case:* O(n^2)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(1)


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length-1; i++) { 
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         if (minIndex !== i) {
//             // Swap the elements
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
// }

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -1];
selectionSort(arr);
console.log(arr);
// --------------------------------------------------
