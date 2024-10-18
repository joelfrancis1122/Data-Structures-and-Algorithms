
const str = 'Hello world'
let space  = 0
for(let i = 0 ; i < str.length ; i++){
  if(str[i] === ' '){
    space = i
  }
}


// first method
// let str1 = str.slice(0,space)
// let str2 = str.slice(space)
// console.log(str2)

// console.log(str2,str1)





// second way without using array methods
let joel = ''
let ale  = ''
for (let i = 0 ; i<space ; i++){
  joel+=str[i]
}

for (let i = space ; i<str.length ; i++){
  ale+=str[i]
}



console.log(ale,joel)