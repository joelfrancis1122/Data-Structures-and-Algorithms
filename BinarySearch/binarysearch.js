

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



function binarySearch(arr,target){
  let left = 0 
  let right = arr.length-1
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    if(target==arr[mid]){
      return mid
    }

    if(target<arr[mid]){
      right = mid -1 
    }

    if(target>arr[mid]){
      left = mid +1 
    }

  }
  return -1 
}
console.log(binary([4,6,7,8,9,10,20,30],20))

console.log(binarySearch([-5,2,4,6,10],10))
// console.log(binarySearch([-5,2,4,6,10],6))
// console.log(binarySearch([-5,2,4,6,10],20))
// console.log(binarySearch([-5,2,4,6,10],-5))
// console.log(binarySearch([-5,2,4,6,10],-6))

// Big-O = O(logn)