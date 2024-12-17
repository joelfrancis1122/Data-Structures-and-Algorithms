// ### 5. Quick Sort
// - *Best Case:* O(n log n)
// - *Average Case:* O(n log n)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(log n) (due to the stack space in recursive calls)

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -34];
console.log(quickSort(arr));

// worst case = O(n^2)
// avg case = O(n logn)

// ---------------------------------------

// function quicksort(arr,left=0,right=arr.length-1)
// {
//     if(left<right)
//     {
//         console.log(arr,"before every recursion");
//         const pivotIndex=partition(arr,left,right)
//         quicksort(arr,left,pivotIndex-1)
//         quicksort(arr,pivotIndex+1,right)
//     }
//     return arr
// }

// function partition(arr,left,right)
// {
//     const pivot=arr[right]
//     let i= left-1

//     for(let j=left;j<right;j++)
//     {
//     if(arr[j]<pivot)
//     {
//         i++
//         swap(arr,i,j)
//     }
// }

// swap(arr,i+1,right)
// console.log(arr,"in middle of swap");
// return i+1
// }
// function swap(arr,i,j)
// {
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
// }

// const array=[7,9,3,6,1,5,16,8,9,4]
// console.log("original array",array);
// const sortedarray=quicksort(array)
// console.log("sorted array",sortedarray);
