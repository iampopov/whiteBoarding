// Without running the code, determine what the following 
// code will output and why:

var a = 1;
function outer(){
	var a = 2;
	function inner(){
		a++;
        console.log(a);
		var a = 5;
	}
	inner();
}
outer();

// ...then run it in your browser and be surprised; to get a better 
// understanding as to why this happens, Google "javascript hoisting."
// Here's a good article to start: https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda

// ======================================================================

// Some longwinded explanation:

// When we call 'outer' on line 14 above, 'inner' is called inside of that,
// but *after* a variable called 'a' is created and set equal to 2...

// Inside of inner, we see a++, and we naturally assume that the value 
// of 'a' we are incrementing should be 'var a = 2' on line 6. BUT instead, 
// we're a victim to a JS concept called hoisting. When JS sees a var keyword
// (for example 'var whatever = 7') it hoists the variable declaration to the
// top ('var whatever') of its current scope... but *NOT* the variable assignment
// ('whatever = 7').

// WhaaaaaaaTF, you might ask?

// In light of this weird JS idiosyncracy, here's how JS would understand/step
// through the code inside inner:

function inner(){
    // Variable 'a' is hoisted to top of scope/nearest function closure
    // which means the initial value of 'a' will be undefined, since 'a'
    // isn't assigned a value until a few lines below...
    var a; 
    // Therefore, when we try to 'a++' here, we're really saying undefined++...
    // remember that we can only run ++ on a number, which undefined is NOT.
    a++; 
    // So when we console.log out 'a', we discover that 'a' has been reassigned
    // from undefined to NaN, since we tried to math on a non-number.
    console.log(a);
    // Here, our variable of 'a' (the same one hoisted above to the top of this 
    // function) is *finally* given a value... this line is where 'a' is finally
    // assigned a value of 5 (too little too late, as we've already
    // tried to use/console.log out that value); our whole path for 'a' inside 
    // 'inner' is as follows:
    // undefined -> NaN -> 5
    a = 5;
}

// You lived! Go have a cocktail as a reward!
// FYI: hoisting behaves slightly differently on 'let' and 'const' and on function/
// class declarations; the article provided gives more specifics.
