// function binarySearch(arr,target){

//      let leftIndex = 0
//      let rightIndex = arr.length-1

//         while (leftIndex <= rightIndex){
//             let middleIndex = Math.floor((leftIndex +rightIndex)/2)
//             if(target === arr[middleIndex]){
//                 return middleIndex
//             }

            

//             if(target<arr[middleIndex]){
//                 rightIndex = middleIndex -1
//             }else{
//                 leftIndex = middleIndex +1
//             }
//         }
//         return -1
// }


function binary(arr,target){
    let left = 0
    let right = arr.length-1

    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]==target){
            return mid
        }

        if(target<arr[mid]){
            right = mid -1
        }else{
            left = mid +1
        }
    }
    return -1 
}


function binarysearch(arr,target){
    left=0
    right=arr.length-1
    
    let middle
    if(left<=right){
      middle=Math.floor((left+right)/2)
       if(arr[middle]===target){
       return middle
       }
    
    
    if(target<arr[middle]){
      right=middle-1
    }else{
      left=middle+1
    }
    
  }
  
  }



console.log(binary([4,6,7,8,9,10,20,30],20))

// console.log(binarySearch([-5,2,4,6,10],10))
// console.log(binarySearch([-5,2,4,6,10],6))
// console.log(binarySearch([-5,2,4,6,10],20))
// console.log(binarySearch([-5,2,4,6,10],-5))
// console.log(binarySearch([-5,2,4,6,10],-6))

// Big-O = O(logn)