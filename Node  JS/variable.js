//There are three types of  variable in  node  (var, let, const)

var  x = 25;
var x = 30;

// When declear variable, it is  good to avoid  use var. Because if we declear same variable multiple time like var a = 2, var a = 3 ...... it will not shwo any error. 

let y = "Variable";

let z = 90; 


console.log(x);
console.log(y);
console.log(z);

// In node variable we do not need to declear variable type. 

/*
For check data  type use --> 
console.log(typeof(variable))
*/

console.log("Variable type is: " + typeof(y));

//for deleteing any data type we can use "Undefine" or "null"

let a = 50;
let b = 90;
a =  undefined;
b = null;
console.log(a);
console.log(b);


/*
In java script  there is also object type. Object type define with {}
let k = {key : property} --> this is object.
*/
let obj = {
    name : "Boba",
    age : 30
};

console.log("This is an object: ");
console.log(obj);

let h = 0
console.log(h);

