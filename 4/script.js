// Write a function that takes in an array of numbers and outputs the average of all the numbers.
// Examples:
// Input: [1, 4, 7]
// Output: 4
// Input: [10, 5]
// Output: 7.5
// Input: [1.5, 3, 2.5, 1]
// Output: 2

// var arrayAverage = function(arr) {
//     var sum = arr.reduce(function(accum, num) {
//         return accum + num;
//     }, 0)//between this )} you can add starting point e.g ), 2}
//     return sum / arr.length;
// }

var arrayAverage = arr =>  arr.reduce((accum, num) => accum + num, 0) / arr.length


console.log(arrayAverage([1, 4, 7]))
console.log(arrayAverage([10, 5]))
console.log(arrayAverage([1.5, 3, 2.5, 1]))