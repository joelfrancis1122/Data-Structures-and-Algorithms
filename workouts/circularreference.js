const obj1 = {};
const obj2 = {};

obj1.property = obj1; // Circular reference: obj1 references itself
obj2.property = obj1; // Circular reference: obj2 references obj1, which references itself

const sparseArray = [10, , , 40]; 
console.log(sparseArray)



    

const nums = [1 ,2,3,4,5]; 
delete nums[2]; 
console.log(nums);
console.log(nums[2]);