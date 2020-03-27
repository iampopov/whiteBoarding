//Count the number of Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    //...
    const dupes = text.toLowerCase().toString().split('')
    let count = 0;
    for (i=0; i<dupes.length; i++) {
        console.log(dupes[i]);
        
        for (j=0; j<dupes.length; j++) {
            console.log(dupes[j]);
            
            if (i === j) {
                count ++
            }
        }
    }

    return count
  }

  console.log(duplicateCount("abcde"));
//   console.log(duplicateCount("aabbcde"));
//   console.log(duplicateCount("aaBbcde"));
//   console.log(duplicateCount("invisibility"));
//   console.log(duplicateCount("invisibilities"));
//   console.log(duplicateCount("aA11"));
//   console.log(duplicateCount("ABBA"));
  