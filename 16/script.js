// Write a function that takes in a sentence as a string and outputs the number of words.
// Examples:
// Input: "let's go!""
// Output: 2
// Input: "I can't wait to start coding"
// Output: 6
// Input: "huh?"
// Output: 1

const countWords = str => str.split(" ").length;

console.log(countWords("let's go")); // 2
console.log(countWords("I can't wait to start coding")); // 6
console.log(countWords("huh?")); // 1