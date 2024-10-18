//-------------------------SPLICE--------------------------------\\

const numbers = [1,   2, 3   ,4, 5];
//               0,   1  2    3  4
const removed = numbers.splice(1, 2);
console.log(numbers); //[ 1, 4, 5 ]
console.log(removed); //[ 2, 3 ]



const array = [1, 2, 3, 4, 5];

// Add elements at index 2
// array.splice(2, 0, 6);

// console.log(array,"splice add"); // Output: [1, 2, 6, 7, 3, 4, 5]


//-------------------------SLICE--------------------------------\\


const fruits = ['apple',     'banana', 'cherry', 'date'];
//                 0             1         2        3 
const slicedFruits = fruits.slice(1, 3);
console.log(fruits); 
console.log(slicedFruits);  // Output: ['banana', 'cherry']




              // Substring vs Subsequence vs slice 


// Example using slice()
let str = "Hello, world!";
let sliced = str.slice(1, 5); // Extracts characters from index 1 to 4 (5 is exclusive)
console.log(sliced); // Output: "ello"

let slicedToEnd = str.slice(7); // Extracts characters from index 7 to the end of the string
console.log(slicedToEnd); // Output: "world!"

let negativeIndex = str.slice(-6); // Extracts characters from index -6 to the end of the string (equivalent to str.slice(7))
console.log(negativeIndex); // Output: "world!"


let negativeIndex1 = str.substring(-6); // Negative indices are treated as 0, so it extracts characters from index 0 to the end of the string
console.log(negativeIndex1); // Output: "Hello, world!"



// subsequence


// a subsequence of a string is a sequence of characters that can be obtained by deleting some characters (possibly none) 
// from the original string without changing the order of the remaining characters.
// So, it's like picking some letters from a word, but they have to stay in the same order as they appear in the word.