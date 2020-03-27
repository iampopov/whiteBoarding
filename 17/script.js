// Write a function that takes in a number and reverses the order of the digits.
// Examples:
// Input: 1234
// Output: 4321
// Input: 1201
// Output: 1021
// Input: 4
// Output: 4

const reverseDigits = num => {
    const numStr = num.toString();
    let outputStr = "";

    for (let i = numStr.length-1; i > -1; i--) {
        outputStr += numStr[i];
    };

    return parseInt(outputStr);
}
// const reverseDigits = num => {
//     const reversed = num.toString().split("").reverse().join("");
// return parseInt(reversed);
// }

console.log(reverseDigits(1234));
console.log(reverseDigits(1201));
console.log(reverseDigits(4));