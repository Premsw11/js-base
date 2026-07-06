// Primitive data types in JS are:
//  string, number, boolean, null, undefined, symbol, bigint

//Reference data types in JS are:(non-primitive)
//  object, array, function

//javascript is a dynamically typed language, 
// which means that you don't have to specify the data type 
// of a variable when you declare it. The data type is 
// determined automatically at runtime based on the value 
// assigned to the variable.

const id  =  Symbol("123"); // unique value
const id2 =  Symbol("123"); // unique value

console.log(id === id2); // false since both are unique values

const bigNumber = 1234567890123456789012345678901234567890n; // bigInt value
//put n at the end of the number to indicate that it is a bigInt value

// object is a collection of key-value pairs
let myobj = {
    name: "Yeeyansh",
    age: 2,
    loggedIn: true,
    state: undefined
};


// array is a collection of values
const heros  = ["Ironman", "Spiderman", "Hulk"]; 


const  myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction); // function

console.log(typeof abc);   // undefined

console.log(typeof null);  // object
console.log(typeof undefined); // undefined 
console.log(typeof heros); // object

/*   *******************************************/

//primitive(stack)
//reference(heap) 
//non-primitive(heap)   


