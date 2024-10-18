
let string = 'joel' 

let odi = string.slice(-3)

console.log(odi)

const doge =   string[0].toUpperCase()

console.log(doge+odi)


/*----------------------------------------------------*/


function removeDuplicates(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[i + 1]) {
          result += str[i];
      }
  }
  return result;
}

const originalString = "joelll";
const stringWithoutDuplicates = removeDuplicates(originalString);
console.log(stringWithoutDuplicates); // Output: "joel"



  // counting the number of vowels in a string

  function countVowels(str){
      let vowelCount = 0
      let vowels = 'aeiouAEIOU'
      for(let i = 0 ; i  < str.length ; i++){
          if(vowels.includes(str[i])){
              vowelCount++
          }
      }
      return vowelCount
  }




//   let str = "ahasdffqwuid"
//   console.log("Word count : " , countAlphabets(str))
//   console.log("Vowel count : " , countVowels(str))







/*------------------------Review question----------------------------*/



// const str = "apple,banana,24,cherry,,fig"

// let start = 0
// let end =0
// let res =[]
// for(let i = 0 ; i<str.length ; i++){
//   if(str[i] === ','){
//     end = i
//     if(str.slice(start,end).length > 1){
//     res.push(str.slice(start,end))
//     } else{
//       res.push(null)
//     }
//     start=end+1
//   }
// }

// console.log(res)

/*----------------------------------------------------*/
const str = "apple,banana,24,cherry,,fig";
const result = [];
let currentWord = '';

for (let i = 0; i < str.length; i++) {
    if (str[i] !== ',') {
      currentWord += str[i];
    } else {
      result.push(currentWord==""?null:currentWord);
      currentWord = '';
    }
}

// Add the last word (if there is any)

console.log(result);