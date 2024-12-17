// ### 1. Bubble Sort
// - *Best Case:* O(n)
// - *Average Case:* O(n^2)
// - *Worst Case:* O(n^2)
// - *Space Complexity:* O(1)



// function bubbleSort(arr) {
//     let swapped
//     do {
//         swapped = false
//         for (let i = 0; i < arr.length ; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i]
//                 arr[i] = arr[i + 1]
//                 arr[i + 1] = temp
//                 swapped = true
//             }
//         }
//     } while (swapped)
//         return arr
// }

const arr = [10,9,8,7,6,5,4,3,2,1,-1]
bubbleSort(arr)
console.log(arr)
// console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1,-1]))




//----------------------------------------------------------------------------------
// function bubblesort(arr,n)
// {
    //     if(n==1)
    //     {
    //         return
    //     }
    
    //     for(let i=0;i<n;i++)
    //     {
    
    //         if(arr[i]>arr[i+1])
    //         {
    //             [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    //         }
    //     }
    //     console.log("arr after each recursion",arr);
    //     bubblesort(arr,n-1)

    // }
    // let arr=[45,23,84,32,64,27,18]
    // bubblesort(arr,arr.length)
    
    
    
    
    //----------------------------------------------------------------------------------
    


    // function bubbleSortObjects(arr, key) {
    //     let swapped;
    //     do {
    //         swapped = false;
    //         for (let i = 0; i < arr.length - 1; i++) {
    //             if (arr[i][key] > arr[i + 1][key]) {
    //                 // Swap objects based on the key
    //                 let temp = arr[i];
    //                 arr[i] = arr[i + 1];
    //                 arr[i + 1] = temp;
    //                 swapped = true;
    //             }
    //         }
    //     } while (swapped);
    //     return arr;
    // }
    
    // // Example Usage:
    // const people = [
    //     { name: "Alice", age: 30 },
    //     { name: "Bob", age: 25 },
    //     { name: "Charlie", age: 35 }
    // ];
    
    // console.log("Before Sorting:", people);
    
    // // Sort by age
    // const sortedPeople = bubbleSortObjects(people, "age");
    // console.log("After Sorting by Age:", sortedPeople);    // 