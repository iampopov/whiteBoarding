function isAnagram( test, original ){


//   var t = test.toLowerCase().split('').sort().join('');
//   var o = original.toLowerCase().split('').sort().join('');
//   return (t==o)?true:false;
  
    if (test.length === original.length) {
        return test.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('') == original.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    } else {
        return false
    }

} 

  console.log(isAnagram("foefet", "toffee")); //true
  console.log(isAnagram("Buckethead", "DeathCubeK")); //true
  console.log(isAnagram("Twoo", "WooT")); //true
  console.log(isAnagram("dumble", "bumble")); //false
  console.log(isAnagram("ound", "round")); //false
  console.log(isAnagram("apple", "pale")); //false
  