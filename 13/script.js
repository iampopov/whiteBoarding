// Write a function that takes an array of numbers and a function as 
// arguments. The function should return true if the callback provided 
// returns true for _ALL_ of the numbers in the array provided
// Examples:
// Input: [1,2,3], function(num){return num === 2}
// Output: false
// Input: [3,4,5], function(num){return num > 2}
// Output: true
// Input: [2,4,6], function(num){return num % 2 === 0}
// Output: true
// Input: [2,5,6], function(num){return num % 2 === 0}
// Output: false


var ifAll = function(arr, func) {
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            return false;
        }
    }  
    
    // if you make it all the way through the array without ever hitting the if above, congrats -- 
    // all array members meet the condition of the callback!
    return true;
}

// or you could do this instead...
var ifAll = function(arr, func) {
    return arr.every(func);
}

// or even do it the arrow function way!
var ifAll = (arr, func) => arr.every(func);



console.log(ifAll([1,2,3], function(num){return num === 2})); // false
console.log(ifAll([3,4,5], function(num){return num > 2})); // true
console.log(ifAll([2,4,6], function(num){return num % 2 === 0})); // true
console.log(ifAll([2,5,6], function(num){return num % 2 === 0})); // false