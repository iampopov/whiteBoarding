// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Note for F#: The input will be of (int list list) which is a List<List>

// Example Input
// [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example Output
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
    
    // const result = []

    // for (let i = 0; i < data.length; i++) {
        
    //     if (data[i][0] > 54 && data[i][1] > 7) {
    //         result.push('Senior')
    //     } else {
    //         result.push('Open')
    //     }
    // }
    // return result;
    // return data.map(r => {
    //     if(r[0]>54 && r[1]>7) {
    //         return 'Senior'
    //     } else {
    //         return 'Open'
    //     }
    // })
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); //['Open', 'Senior', 'Open', 'Senior']
  console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])); //['Open', 'Open', 'Open', 'Open']
  console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); //['Senior', 'Open', 'Open', 'Open']
  console.log(openOrSenior([[60, 12], [90, 9], [1, 1], [21, 21], [54, 9], [90, 8], [0, 0], [55, 10], [75, 11], [90, 7]])); //[\'Senior\', \'Senior\', \'Open\', \'Open\', \'Open\', \'Senior\', \'Open\', \'Senior\', \'Senior\', \'Open\']
  
  