// ### 4. Merge Sort
// - *Best Case:* O(n log n)
// - *Average Case:* O(n log n)
// - *Worst Case:* O(n log n)
// - *Space Complexity:* O(n)




// function mergeSort(arr){

//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge (mergeSort(leftArr),mergeSort(rightArr))
// }


// function merge(leftArr,rightArr){
//     const sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortedArr.push(leftArr.shift())
            
//         }else{
//             sortedArr.push(rightArr.shift())
//         }
//     }
//     return [...sortedArr,...leftArr,...rightArr]
// }



// --------------------------------------------------------------------

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid  = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    let sort = []
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}

console.log(mergeSort([1,2,3,4,5,6,7,8,9,0,10]))