const nums = ['a', 'b', 'a', 'c', 'b', 'd'];
const unique = [];

for (let i = 0; i < nums.length; i++) {
  if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
    unique.push(nums[i]); // Push only unique elements
  }
}

console.log(unique); 



let arr=["david", "zuker", "elon", "joel", "elon",'joel',"david"]

function removeDup(arr){
    let result=[]
    let seen={}
    for(let i=0;i<arr.length;i++){
        if(!seen[arr[i]]){
            if(seen[arr[i]]=true){
                result.push(arr[i])

            }
        }
    }
    return result
}

console.log(removeDup(arr))