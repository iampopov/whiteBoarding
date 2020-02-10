// Write a function that takes an array of numbers and a function as 
// arguments. The function should return true if the callback provided 
// returns true for _any_ of the numbers in the array provided
// Examples:
// Input: [1,2,3], function(num){return num === 2}
// Output: true
// Input: [1,5,3], function(num){return num === 2}
// Output: false
// Input: [1,2,3], function(num){return num % 2 === 0}
// Output: true
// Input: [1,5,3], function(num){return num % 2 === 0}
// Output: false


const ifAny = (arr, func) => arr.some(func);

console.log(ifAny([1,2,3], function(num){return num === 2}));
console.log(ifAny([1,5,3], function(num){return num === 2}));
console.log(ifAny([1,2,3], function(num){return num % 2 === 0}));
console.log(ifAny([1,5,3], function(num){return num % 2 === 0}));

