// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of it's digits is "Very Even".
// Note: assume the provided number will always be positive
// Examples:
// Input: 88
// Output: false (8 + 8 = 16 -> 1 + 6 = 7)
// Input: 222
// Output: true
// Input: 5
// Output: false
// Input: 8
// Output: true
// Input: 841
// Output: true (8 + 4 + 1 = 13 -> 1 + 3 => 4)

// function isVeryEven(num) {
//    str = num.toString()
//    sum = 0
//    for (let i = 0; i<str.length; i++) {
//     sum += parseInt(str[i])
//    }
//    str2=sum.toString()
//    sum2 = 0;
//    for (let j=0; j<str2.length; j++) {
//        sum2 += parseInt(str2[j])
//    }
// //return sum2
// //    if (sum2 % 2 === 0) {
// //        return true
// //    } else {
// //        return false
// //    }
//  return sum2 % 2 === 0 ? "true" : "false";
// }

const isVeryEven = num => {
    if (num < 10) {
        //return num % 2 === 0;
        return !(num % 2); //same as above line
    } //this is a breakout of infinite loop since it will boil down to single digits

    const digits = num.toString().split('').map(num => parseInt(num))
    const total = digits.reduce((sum, num) => sum + num, 0)
    return isVeryEven(total) //usVeryEven(6)

}

console.log(isVeryEven(88));
console.log(isVeryEven(222));
console.log(isVeryEven(5));
console.log(isVeryEven(8));
console.log(isVeryEven(841));


