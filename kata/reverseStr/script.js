// function reverseWords(str) {
// var splt = str.split(' ')
// var joined = []

// for (var i = 0; i<splt.length; i++) {
//   var revd = splt[i].split('').reverse().join('')
//   joined.push(revd)
// }
//   return joined.toString().split(',').join(" ");
// }

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

  console.log(reverseWords('apple')); //elppa
  console.log(reverseWords('a b c d')); //a b c d 
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); //ehT kciuq nworb xof spmuj revo eht yzal .god
  