// Write a function that takes in a string and and returns the string with white space removed and all letters changed to lowercase . This is a common task when a variable, routeName, etc needs to be created from user input.


// Examples:
// Input: Hi Everyone
// Output: hieveryone
// Input:    favorite tree    ever
// Output: favoritetreeever
// Input: one word
// Output: oneword

// (onVar) => {

// }

const onVar = str => str.toLowerCase().replace(/\s+/gi, "") // /s space g globally i case sensitive



console.log(onVar("Hi Everyone"))
console.log(onVar("favorite tree ever"))