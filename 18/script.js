// Write a function that takes in an array of numbers and outputs the largest number
// Examples:
// Input: [2,3,7,8,4]
// Output: 8
// Input: [1,9,20,5,-3]
// Output: 20


//largestNum = num =>  Math.max(...num) // ... is a spread parameter injects value in the array

// const largestNum = arr =>  {
//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// } 
const largestNum = arr =>  {
                        // 2      5         false          lgst becomes num
    return arr.reduce((largest, num) => largest > num ? largest : num);
}; 


console.log(`Result is ${largestNum([2,3,7,8,4])}`)
console.log(`Result is ${largestNum([1,9,20,5,-3])}`)

