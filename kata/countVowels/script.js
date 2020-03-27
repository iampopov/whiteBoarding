// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//   var vowelsCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     Convert number to reversed array of digits

// function digitize(n) {
//   console.log(n);
  
//   const nn = (''+n).split('').reverse();

//   const numArr = []
//   for (let n in nn) {

//     numArr.push(parseInt(nn[n]))
//   }

//   return numArr
// }

function digitize(n) {
  
  const nn = String(n).split('').reverse().map(Number);

  return nn
}

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

console.log(digitize(348597));
 
 