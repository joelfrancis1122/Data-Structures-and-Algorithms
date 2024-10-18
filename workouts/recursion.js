// function factorial (n){
//     if(n==1){
//         return n
//     }
//     return n*factorial(n-1)
// }

// console.log(factorial(5)) //output:120


//O(n)



function joel(i=1){
    if(i>7){
      return 10000
    }
    console.log("Hello Joel")
        return joel(i+1);
  }
  // console.log(joel(7))
  // joel()
  
  
  
  
  // function factorial(n) {
  //   if (n === 0) {
  //       return 1;
  //   } else {
  //       return n * factorial(n - 1);
  //   }
  // }
  
  
  // console.log(factorial(1)); // Output: 120
  
  
  
  // Recursion is a programming technique where a function calls itself directly or
  // indirectly in order to solve a problem. In recursion, the solution to a 
  // problem depends on solutions to smaller instances of the same problem.
  
  
  // types of recurion 
  
  
  
  // ======================sum==================
  
  
  // const arr = [1, 2, 3, 4, 5];
  
  // function recursiveSum(array) {
  //   // Base case: if the array is empty, return 0
  //   if (array.length === 0) {
  //     return 0;
  //   }
         
  //   // Recursive case: sum the first element and the sum of the rest of the array
  //   return array[0] + recursiveSum(array.slice(1));
  // }
  
  // const totalSum = recursiveSum(arr);
  
  // console.log(totalSum); // Output: 15
  
  
  
  
  
  // function recursiveSum(n) {
  //   // Base case: if n is 0, return 0
  //   if (n === 0) {
  //     return 0;
  //   }
    
  //   // Recursive case: return n plus the sum of numbers from 1 to n-1
  //   return n + recursiveSum(n - 1);
  // }
  
  // // Example usage:
  // let n = 5;
  // console.log(recursiveSum(n)); // Output: 15
  
  
  
  
  
  
  function sumArray(arr) {
    // Base case: if the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
    
    // Recursive case: sum the first element and the result of summing the rest of the array
    return arr[0] + sumArray(arr.slice(1));
  }
  
  const arr = [1, 2, 3, 4, 5];
  console.log(sumArray(arr)); // Output: 15
  
  
  function sum(n){
    return (n*n+1)/2
  }
  console.log(sum(3))











  function factorial(n){
    if(n<2){
        return n
    }
    return n * factorial(n-1)
}
console.log('fatorial of 5 is :')
console.log(factorial(5))