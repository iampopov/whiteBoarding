function isAnagram( test, original ){
  
    if (test.length === original.length) {
        return test.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('') == original.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    } else {
        return false
    }

    //return test.length;
} 

  console.log(isAnagram("foefet", "toffee")); //true
  console.log(isAnagram("Buckethead", "DeathCubeK")); //true
  console.log(isAnagram("Twoo", "WooT")); //true
  console.log(isAnagram("dumble", "bumble")); //false
  console.log(isAnagram("ound", "round")); //false
  console.log(isAnagram("apple", "pale")); //false
  