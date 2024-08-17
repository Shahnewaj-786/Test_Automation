/**
 * JIT ==> Just In Time Compiler
 * Basic syntex of function is: function_name s(){.......}
 * 
 */

function s1(){
    console.log ("This is S1SSS function for print")
}
s1(); //This will print s1 function

function s2(){
    return "Return S2 Function";
}

console.log(s2()); // This will print s2 function

/**
 * We can use function as variable
 */

function s4() {
    return "S4 function is used as variable";
}

const x = s4();
console.log(x);