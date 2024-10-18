
// let bubbleSortByKey = function(arr, key) {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i][key] > arr[i + 1][key]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped);
//     return arr;
// }

// const people = [
//     { name: "john", age: 30 },
//     { name: "mohana", age: 29 },
//     { name: "jack", age: 35 }
// ];

// console.log(bubbleSortByKey(people, "age"));


// ------------------------------------------------------------

// function mergeSort(arr, key) {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);

//     return merge(mergeSort(left, key), mergeSort(right, key), key);
// }

// function merge(left, right, key) {
//     let sorted = [];

//     while (left.length && right.length) {
//         if (left[0][key] < right[0][key]) {
//             sorted.push(left.shift());
//         } else {
//             sorted.push(right.shift());
//         }
//     }

//     return [...sorted, ...left, ...right];
// }

// const people = [
//     { name: "john", age: 30 },
//     { name: "mohana", age: 29 },
//     { name: "jack", age: 35 }
// ];

// console.log(mergeSort(people, "age"));

// ------------------------------------------------------------



// function quickSort(arr,key) {
//     if(arr.length<2){
//         return arr
//     }
    
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length - 1; i++) {
// if (arr[i][key] < pivot[key]) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
// return [...quickSort(left,key),pivot,...quickSort(right,key)]
// } 

// const people = [
//     {name: "john", age: 30},
//     {name: "mohana", age: 29},
//     {name: "jack", age: 35}
// ]

// console.log(quickSort(people, "age"));


// ------------------------------------------------------------

let ar={ h: 2, g: 3, y: 8, r: 1, d: 2 }

let arr=Object.entries(ar)
arr.sort((a,b)=>a[1]-b[1])  
console.log("sort",Object.fromEntries(arr))


// ------------------------------------------------------------

arr = [ 'qewr','fdfsf', 'mcnvj', 'okoada', 'sfegrg' ]


// const sort = arr.sort()
  const sort = arr.sort((a, b) => a.length - b.length);
