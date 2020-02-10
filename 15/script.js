// Write a function that takes an array of numbers and a function as parameters. The 
// function parameter will return true if the input meets a certain condition or false 
// otherwise. Your function should run the function parameter on every element in the 
// array parameter and, if it returns true, add the element to a new array. Return the 
// new array. 
// Ex:
// Input: [1,2,3] function(num){return num === 2}
// Output: [2]
// Input: [1,2,3,4,5,6] function(num){return num % 2 === 0}
// Output: [2,4,6]
// Input: [1,2,3,4,5,6] function(num){return num > 3}
// Output: [4,5,6]

// homebrewing an array filter function but using the built-in method `.push()`
const filterArr = (arr, func) => {
    const outputArr = [];

    for (const num of arr) {
        if (func(num)) {
            outputArr.push(num);
        }
    }

    return outputArr;
}

// homebrewing an array filter function AND avoiding the built-in method `.push()`
const filterArr = (arr, func) => {
    const outputArr = [];

    for (const num of arr) {
        if (func(num)) {
            outputArr[outputArr.length] = num;
        }
    }

    return outputArr;
}

// using the magical `.filter()`!
const filterArr = (arr, func) => arr.filter(func);


console.log(filterArr([1,2,3], function(num){return num === 2})); // [2]
console.log(filterArr([1,2,3,4,5,6], function(num){return num % 2 === 0})); // [2,4,6]
console.log(filterArr([1,2,3,4,5,6], function(num){return num > 3})); // [4,5,6]