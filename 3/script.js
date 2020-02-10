// Write a function that takes in a string and outputs the *first* occurrence of a character 
// that does not repeat itself in that string.
// Examples:
// Input: "the quick brown fox jumps over the calm kitten quietly"
// Output: "b"
// Input: "this hat is the greatest!"
// Output: "g"
// Input: "what a wonderful day it has been!"
// Output: "o"

var firstUnique = function(str) {
    for (var i = 0; i <  str.length; i++) {
        var char = str[i];

        if (str.indexOf(char) === str.lastIndexOf(char)) {
            return char;
        }
    }
    
    return "no unique characters";
}

// this does not work:
// var firstUnique = function(str) {
//     var charCounts = {};

//     for (var i = 0; i < str.length; i++) {
//         if (charCounts[char]) {
//             charCounts[char]++;
//         } else {
//             charCounts[char] = 1;
//         }

//     }
//     for (key in charCounts) {
//         if (charCounts[key] === 1) {
//             return key;
//         }
//     }
//     return "no unique characters";
// }


// this works:

// var firstUnique = function(str) {
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
//         var charCount = 0;

//         for (var j = 0; j < str.length; j++) {
//             if (char === str[j]) {
//                 charCount++
//             }
//         }
//         if(charCount === 1) {
//             return char;
//         }
//     }
//     return "no unique characters"
// }

console.log(firstUnique("the quick brown fox jumps over the calm kitten quietly"));
console.log(firstUnique("this hat is the greatest!"));
console.log(firstUnique("what a wonderful day it has been!"));
console.log(firstUnique("abca"));
