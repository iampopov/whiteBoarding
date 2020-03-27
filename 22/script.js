// Write a function that takes in a string and returns the string with all lowercased letters uppercase, and all uppercased letters lowercase
// Examples:
// Input: "hello world"
// Output: "HELLO WORLD"
// Input: "HELLO WORLD"
// Output: "hello world"
// Input: "1a2b3c4d5e"
// Output: "1A2B3C4D5E"
// Input: "OoOoOhHh! MaGiCaL!!!"
// Output: "oOoOoHhH! mAgIcAl!!!"

// function changeCase(arr) {
   
//     let outputStr = "";

//     for (const char of arr) {
        
//         outputStr += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }
//     return outputStr;
// }

// function changeCase(arr) {
   
//     const outputStr = arr.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")

//     return outputStr;
// }

const changeCase = arr => arr.split("").map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join("")

// function changeCase(arr) {
   
//     let outputStr = "";

//     for (const char of arr) {
//         if ( char === char.toUpperCase()) {
//             outputStr += char.toLowerCase()
//         } else {
//             outputStr += char.toUpperCase();
//         }
//     }
//     return outputStr;
// }


// function changeCase(arr) {
//     //return arr.length
//     reversed = []
//     for (let i = 0; i < arr.length; i++) {
//         //console.log(arr[i]);
//         if (arr[i] === arr[i].toUpperCase()) {
//             //console.log(arr[i] + " is upper");
//             reversed.push(arr[i].toLowerCase())
//         } else {
//             //console.log(arr[i] + ' is lower');
//             reversed.push(arr[i].toUpperCase())
//         }
        
//     }
//     return reversed.toString().split(',').join('');
// }

console.log(changeCase("hello world"));
console.log(changeCase("HELLO WORLD"));
console.log(changeCase("1a2b3c4d5e"));
 console.log(changeCase("OoOoOhHh! MaGiCaL!!!"));


