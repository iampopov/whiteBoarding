// Write a function that takes an array of strings as an argument and returns a sorted 
// array containing the same strings, ordered from shortest to longest.
// Examples:
// Input: ["green", "blue", "yellow", "red"]
// Output: ["red", "blue", "green", "yellow"]
// Input: ["skis", "snowboard", "sled", "ice skates"]
// Output: ["skis", "sled", "snowboard", "ice skates"]
// Input: ["horse", "cat", "elephant", "bird"]
// Output: ["cat", "bird", "horse", "elephant"]


function count (arr) {
    return arr.sort((a, b) => a.length - b.length)
}

console.log(count(["green", "blue", "yellow", "red"]));
console.log(count(["skis", "snowboard", "sled", "ice skates"]));
console.log(count(["horse", "cat", "elephant", "bird"]));
