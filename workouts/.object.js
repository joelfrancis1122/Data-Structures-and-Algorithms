// Original object
const obj = { a: 3, b: 5, d: 1, c: 4 };
// Step 1: Convert the object into an array of key-value pairs
const entries = Object.entries(obj);

// Step 2: Sort the array based on the values
entries.sort(([, value1], [, value2]) => value1 - value2);

// Step 3: Convert the sorted array back into an object
const sortedObj = Object.fromEntries(entries);

console.log(sortedObj); // Output: { d: 1, a: 3, c: 4, b: 5 }



// // Original object
// const obj = { a: 3, b: 5, d: 1, c: 4 };

// // Step 1: Extract the values from the object
// const values = Object.values(obj);

// // Step 2: Sort the values in ascending order
// values.sort((a, b) => a - b);

// console.log(values); // Output: [1, 3, 4, 5]




const array1= [{a:10,b:20},{c:30,d:40}]

const ress = array1.reduce((acc,current)=>{
  for (i in current){
    acc= acc+ current[i]
  }
  return acc
},0)




// -------------------------------------------------------------------------//


// Object.keys()

// Returns an array of the object's own enumerable property names.
// javascript
// Copy code
// const obj = { a: 1, b: 2, c: 3 };
// const keys = Object.keys(obj);
// console.log(keys); // Output: ["a", "b", "c"]




// Object.values()

// Returns an array of the object's own enumerable property values.
// javascript
// Copy code
// const values = Object.values(obj);
// console.log(values); // Output: [1, 2, 3]



// Object.entries()

// Returns an array of the object's own enumerable property [key, value] pairs.
// javascript
// Copy code
// const entries = Object.entries(obj);
// console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]



// Object.assign()

// Copies all enumerable own properties from one or more source objects to a target object. It returns the target object.
// javascript
// Copy code
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };
// const result = Object.assign(target, source);
// console.log(result); // Output: { a: 1, b: 4, c: 5 }



// let object = {a:2,b:3,c:6,d:10}

// for(let i in object){
//   if(object[i]%2!=0){
//   delete object[i];
    
//   }
// }

// console.log(object)