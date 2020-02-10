// Write a function that takes in an input and returns true if it's an integer and false otherwise.
// Examples:
// Input: "7"
// Output: false
// Input: 7
// Output: true
// Input: 4.3
// Output: false


// var isInteger = val => Number.isInteger(val);

// console.log(isInteger("7"));
// console.log(isInteger(7));
// console.log(isInteger(4.3));

// okay... but has some weaknesses as parseInt is actually intended only to apply
// to converting strings to numbers; parseInt may behave oddly when called on numbers
// https://gideonpyzer.dev/blog/2017/06/06/js-tip-use-parseint-for-strings-not-for-numbers/
var isInteger = val => parseInt(val) === val;

// better!
var isInteger = val => Math.floor(val) === val;

// another great way to do it (though Number.isInteger() is not supported pre-IE12)
var isInteger = val => Number.isInteger(val);


console.log(isInteger("7")); // false
console.log(isInteger(7)); // true
console.log(isInteger(4.3)); // false