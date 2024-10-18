const arr = ['apple', 'orange', 'blueberry'];
const reversedStrings = [];

for (let i = 0; i < arr.length; i++) {
  let reversedStr = '';
  for (let j = arr[i].length - 1; j >= 0; j--) {
    reversedStr += arr[i][j];
  }
  reversedStrings.push(reversedStr);
}

console.log(reversedStrings); // Output: ['elppa', 'egnaro', 'yrrebeulb']




/*----------------------Sum of flat array------------------------------*/


const nestedArray = [1, 2, [3, 4, [5, 6]]];
// const flattenedArray = nestedArray.f lat().flat();


function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += calculateSum(arr[i])
        } else {
            sum += arr[i]
        }
    }
    return sum

}

console.log(nestedArray);
console.log("sum: ", calculateSum(nestedArray));  
 






/*----------------------------------------------------*/


// let arr= [13,67,91,47,12,90,31,57,15]

// let arr2 = arr.reduce((accu,curr)=>{
//         if(curr%2 != 0) {
//     accu = accu<curr ? curr : accu
           
//         }
//   return accu
  
// })
// console.log(arr2)






/*-----------------------flat array withuout using arr.flat()-----------------------------*/



const array = [[1, 2], [3, 4], [5, 6]];
const flattened = [];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    flattened.push(array[i][j]);
  }
}

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]



// ----------


let k =0
let result =[]

for(let i=0;i<arr.length;i++){
    if(typeof arr[i]!=="number"){
        for(let j=0;j<arr[i].length;j++){
            result[k] = arr[i][j]
            k++
        }
    }else{
        result[k] = arr[i]
        k++
    }
}
console.log(result)



