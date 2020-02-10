
// const isValidPassword = str => {
//     if (str.length < 8) {
//         return false;
//     } else if (str === str.toLowerCase()) {
//         return false
//     } else if (str === str.toUpperCase()) {
//         return false
//     } else {
//         return true
//     }
// }

// const isValidPassword = str => {
//     if (str.length < 8 || str === str.toLowerCase() || str === str.toUpperCase()) {
//         return false;
//     } else {
//         return true
//     }
// }

const isValidPassword = str => !(str.length < 8 || str === str.toLowerCase() || str === str.toUpperCase()) 


console.log(isValidPassword('RexTheDog')) //T
console.log(isValidPassword('rexrhedog')) //f
console.log(isValidPassword('REXTHEDOG')) //f
console.log(isValidPassword('Dog')) //f