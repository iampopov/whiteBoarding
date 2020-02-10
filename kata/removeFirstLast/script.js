//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// function removeChar(str){
//   //You got this!

//   let removed = str.split('')
//   removed.shift()
//   removed.pop()
//   return removed.toString().replace(/,/g, '')
  
 
//  };

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar("eloquent"));
 