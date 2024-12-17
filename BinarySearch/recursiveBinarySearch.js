

// function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
//     while(left<=right){
//         let midd = Math.floor((left+right)/2)
//         if(target === arr[midd]){
//             return midd
//         }
//         if(target<arr[midd]){
//             return recursiveBinarySearch(arr,target,left,midd-1)
//         }else{
//             return recursiveBinarySearch(arr,target,midd+1,right)

//         }
//     }
//     return -1
// }


function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
    while(left<=right){
        let midd = Math.floor((left+right)/2)
        if(target===arr[midd]){
            return midd
        }
        if(target>arr[midd]){
            return recursiveBinarySearch(arr,target,midd+1,right)
        }
        if(target<arr[midd]){
            return recursiveBinarySearch(arr,target,left,midd-1)
        }
    }
    return - 1 
}






console.log(recursiveBinarySearch([3,34,10,3,1,23],10))
console.log(recursiveBinarySearch([3,34,10,3,1,23],20))
console.log(recursiveBinarySearch([3,34,10,3,1,23],23))

// Big-O = O(logn)\