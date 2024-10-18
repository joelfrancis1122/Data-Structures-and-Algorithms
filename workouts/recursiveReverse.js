
function reverse(string) {
    let reversedString = "";
    for (let i = 0; i <= string.length - 1; i++) {
        reversedString += string[i];
    }
    return reversedString;
  }
  
  console.log(reverse("Joel")); // Outputs "leoJ"
  
  //=========================================================== normal case =================================================================
  function reverse(string) {
    if (string.length === 1) {
        return string;
    } else {
        return string.split("").reverse().join("");
    }
  }
  // console.log(reverse("Joel"));
  //======================================================= Recursion method ===============================================================
  
  function reverse(string){
    if(string.length==1){
      return string
    }else{
      return reverse(string.substring(1))+string[0]
    }
  }
  
  function str(str){
    if(str.length =1){
      return str
    }
    return str(str.splice(1)) +string[0]
  }
  
  // console.log(reverse("adi"))
  
  
  //======================================================= another method ===============================================================
  
  // console.log("Hello, World!");
  
  const str = 'Hello world'
  let space  = 0
  for(let i = 0 ; i < str.length ; i++){
    if(str[i] === ' '){
      space = i
    }
  }
  
  // first method
  let str1 = str.slice(0,space)
  let str2 = str.slice(space)
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
  
  
  
  // console.log(ale+" "+joel)