console.log  ("Start Basic Node js");

var  x = 25;
var x = 30;

let y = "Variable";
let z = 90; 

console.log(x);
console.log(y);
console.log(z);
console.log("Variable type is: " + typeof(y));


let a = 50;
let b = 90;
a =  undefined;
b = null;
console.log(a);
console.log(b);


let obj = {
    name : "Boba",
    age : 30
};

console.log("This is an object: ");
console.log(obj);


const people = {
    name : "Tuni",
    age : 2,
    salary : "100 TK",
    day : 5,
    address : {
        home : "Dhaka",
        office : "Mirpur"
    }
};

people.name = "Bappi";
people.address.home =  "Gopalganj";
people.salaryAccount = "Brac Bank";

console.log(people);


//In JS we can declear an array using [Square Brackets || Third Brackets]

/**
 formate for an array is --> 
 const array_name = []
array_name.push(value)
array_name.push(value)


const array_name = [value,value,value]

 */

const number = []
number.push (10)
number.push (20)

console.log(number);

const number2 = [10,40,50,100]
console.log(number2);
