//We can  change value or insert value to an object by using objectName.keyName  = valueName;

const people = {
    name : "Tuni",
    age : 2,
    salary : "100 TK",
    day : 5,
    address : {
        home : "Dhaka",
        office : "Mirpur",
        interest : ["Coding", "Testing", "Playing"]
    },
    location : ["Dhanmondi", "Khilkhet", "Kalapani"]
};

people.name = "Bappi";
people.address.home =  "Gopalganj";
people.salaryAccount = "Brac Bank";



console.log(people);