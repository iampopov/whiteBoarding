var number=function(array){

// const result = [];

// if ( array === [] ) {
//   return array;
// } else {
//   for (let index = 0; index < array.length; index++) {
//     result.push(`${index+1}: ${array[index]}`)    
//   }
// }
// return result;

return array.map(function (line, index) {
  return (index + 1) + ": " + line;
});

}

  console.log(number([]));
  console.log(number(["a", "b", "c"]));
  