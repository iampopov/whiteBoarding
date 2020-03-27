//capitalizes every word first letter

function toJadenCase( str ){
    return str.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
} 

  console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
  //solved
  
  