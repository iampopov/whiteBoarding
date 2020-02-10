// Write a function that takes in an integer and outputs the sum of all the numbers 
// from 1 to that integer.

// Examples:
// Input: 2
// Output: 3 (because 1 + 2 = 3)

// Input: 4
// Output: 10  (because 1 + 2 + 3 + 4 = 10)

// Input: 10
// Output: 55


// Hint: you should use the 'return' keyword to output your answer
var sumOfAll = function(int) {
    // return (int/2) * (int +1)
    var sum = 0; // needs to be outside to keep cumulative total

    for (var i = 0; i <= int; i++) {
        sum += i
    }
    return sum;
}


// Write yourself a few tests... that way, once you get your code working, these console.logs 
// should print out the expected value. Until they print the right answer, keep coding! This is
// very similar to a very common development workflow called TDD (Test-Driven Development).
console.log(sumOfAll(2)); // 3
console.log(sumOfAll(4)); // 10
console.log(sumOfAll(10)); // 55