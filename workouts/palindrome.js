// function Palindrome(number){
//     let str = number.toString()
//     for (let i= 0; i<str.length/2; i++){
//         if(str[i]!==str[str.length-1-i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(Palindrome(121))
// console.log(Palindrome("MALAYALAM"))







// ======================================================================================






function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it's a palindrome
    if (str.length <= 1) {
        return true;
    }
    
    // Check if the first and last characters are equal
    if (str[0] === str[str.length - 1]) {
        // Recur with the substring excluding the first and last characters
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
}
// Example usage
console.log(isPalindrome("racecar")); // Output: true


function palindrome(){
    
}