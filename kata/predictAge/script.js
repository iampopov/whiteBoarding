// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.


function predictAge( age1, age2, age3, age4, age5, age6, age7, age8 ){

    
    const death = Math.floor((Math.sqrt(age1*age1 + age2*age2 + age3*age3 + age4*age4 + age5*age5 + age6*age6 + age7*age7 + age8*age8))/2)


    return death;
} 

  console.log(predictAge(65,60,75,55,60,63,64,45)); //86
  //console.log(predictAge(false));
  