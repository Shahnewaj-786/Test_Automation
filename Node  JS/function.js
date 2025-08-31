/**
 * JIT ==> Just In Time Compiler
 * Basic syntex of function is: function_name s(){.......}
 * 
 */

function s1(){
    console.log ("This is S1 function for print")
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



//Functions are print by its serial of call. If there are two functions a() and b() and if we call b() first it will print b() then it will print a()

function displayFunction(myText){
    console.log(myText);
}

function displayFirst(){
    displayFunction("Hello");
}

function displaySecond(){
    displayFunction("Goodbye");
}

displaySecond();
displayFirst();



/*function greet(person) {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let person = { name: "John", age: 25 };
console.log(greet(person));*/


function greet(person) {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}
let person = { name: "John", age: 25 };
console.log(greet(person));
