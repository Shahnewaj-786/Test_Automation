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




//Basic Forloop 

/**Let define an array for loop call */
const items = [];
items.push(10);
items.push(71);
items.push(85.36);
items.push(65);

for (
    i = 0; i<items.length; i++ //if want to increment 2 times it should be i = i+2
){
    console.log("Check by foor_loop: "+ items[i]);
}


/**ForeachLoop: foreachloop is very important for advance automation related tasks */
const array = [];
array.push(36);
array.push(10);
array.push(41);
array.push(54);

for (
    const item of array
){
    console.log(array);
}
////////////////////////////////////////////////////
const array_2 = [10,20,30,40];

for (
    const item of array_2
){
    console.log("Check by foor_loop: "+array_2);
}

//Basic While Loop

const wloop = []
wloop.push(10)
wloop.push(100)
wloop.push(1000)

j=0;
while(
    j<wloop.length
){
    console.log("Print Using While Loop: " + wloop[j]);
    j++
    //i=i+4;
}






function bappi(){
    console.log("This is a function");
}



function bappi2(){
    return "This is a function2";
}



function ss4(){
    return 4;
}
const u = ss4();




function my_sum(x,y){
    const result_sum = x+y;
    console.log("Result is: " + result_sum);
}


console.log(bappi2());
console.log(u);
my_sum(10,20);
bappi();










function firstDoisplay(my_command){
    console.log(my_command);
}

function myCalculator(n1,n2,mycallback){
    let sum = n1+n2;
    mycallback(sum);
}

myCalculator(100,20,firstDoisplay);


