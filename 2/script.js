// Write a function that takes in a string and returns true if this string is a
// palindrome and false if the string is not a palindrome. After you solve this, solve
// it again using another methodology, and even a third if you have time!
// Examples:
// Input: palindrome
// Output: false
// Input: racecar
// Output: true
// Input: donuts
// Output: false
// Input: redivider
// Output: true

// var isPalindrome = function(str) {
//     str = str.toLowerCase();
//     for (var i=0; i < (Math.floor(str.length/2)); i++) {
//         // console.log("left side: "+ str[i])
//         // console.log("right sede: "+str[str.length - i - 1]);

//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }

//     }
//     return true;
// }

var isPalindrome = function(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");

    
}

console.log(isPalindrome("palindrome"));
console.log(isPalindrome("racecaR"));
console.log(isPalindrome("donuts"));
console.log(isPalindrome("redivider"));