// function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }


// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//     if(target===arr[middleIndex]){
//         return middleIndex
//     }
//     if(target<arr[middleIndex]){
//            return search(arr,target,leftIndex,middleIndex-1)
//     }else{
//        return search(arr,target,middleIndex+1,rightIndex)
//     }
// }


function recursiveBinarySearch(arr,target,left=0,right=arr.length-1){
    while(left<=right){
        let midd = Math.floor((left+right)/2)
        if(target === arr[midd]){
            return midd
        }
        if(target<arr[midd]){
            return recursiveBinarySearch(arr,target,left,midd-1)
        }else{
            return recursiveBinarySearch(arr,target,midd+1,right)

        }
    }
    return -1
}




console.log(recursiveBinarySearch([3,34,10,3,1,23],10))
console.log(recursiveBinarySearch([3,34,10,3,1,23],20))
console.log(recursiveBinarySearch([3,34,10,3,1,23],23))

// Big-O = O(logn)\