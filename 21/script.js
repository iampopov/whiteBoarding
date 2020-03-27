// Write a function that takes an array of numbers as an argument and returns the sum of all the odd numbers
// Examples:
// Input: [6, 71, 3, 2, 9, 4]
// Output: 83
// Input: [4, 6, 8]
// Output: 0
// Input: [0, 8, -7, 4, 3]
// Output: -4


function addOdd(arr) {
    return arr.filter(num => num % 2 !== 0).reduce((accum, num) => accum + num, 0);
}

console.log(addOdd([6, 71, 3, 2, 9, 4]));
console.log(addOdd([4, 6, 8]));
console.log(addOdd([0, 8, -7, 4, 3]));


