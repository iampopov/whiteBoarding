var number=function(array){

const result = [];

if ( array === [] ) {
  return array;
} else {
  for (let index = 0; index < array.length; index++) {
    result.push(`${index+1}: ${array[index]}`)    
  }
}
return result;
}

  console.log(number([]));
  console.log(number(["a", "b", "c"]));
  