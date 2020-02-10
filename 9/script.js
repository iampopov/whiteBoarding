// Write a function that takes an array of numbers and a function as parameters. 
// Your function should return the array that results from applying the function 
// parameter (callback) to each element in the original number array. 
// NOTE: try this first *without* using any built-in array methods!
// Ex:
// Input: [1,2,3] function(num){return num * 2}
// Output: [2,4,6]
// Input: [1,2,3] function(num){return num + 1}
// Output: [2,3,4]
// Input: [1,2,3] function(num) {return num / 2}
// Output: [0.5,1,1.5]
// Input: [1,2,3] function(num) {return num - 2}
// Output: [-1,0,1]


//with built ins
const mapArr = (arr, func)  => {
    return arr.map(func)
}


//without built ins
// const mapArr = (arr, func) => {
//     const output = [];

//     for (const num of arr) {
//         const newNum = func(num);
//         output.push(newNum);
//        // output[length] = newNum;
//     }
//     return output;
// }

console.log(mapArr([1,2,3], function(num){return num * 2}))
console.log(mapArr([1,2,3], function(num){return num + 1}))
console.log(mapArr([1,2,3], function(num){return num / 2}))
console.log(mapArr([1,2,3], function(num){return num - 2}))