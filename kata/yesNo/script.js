function boolToWord( bool ){
    // if (bool) { 
    //     bool = "Yes";
    //     return bool}
    //     bool = "No";
    //     return bool  
    return (bool ? "Yes" : "No");
} 

console.log(boolToWord(true));
console.log(boolToWord(false));
  