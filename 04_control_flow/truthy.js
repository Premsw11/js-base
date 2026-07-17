const userEmail = "premsw11@gmail.com";
if(userEmail){
    console.log("Got user email from the database");
} else {
    console.log("no user email found");
}

/*falsy values in JavaScript are values that evaluate to false in a boolean context. The falsy values are:
- false
- 0
- -0
- 0n (BigInt zero)
- "", '', `` (empty string)
- null
- undefined
- NaN */

/*truthy values in JavaScript are values that evaluate to true in a boolean context. 
All values that are not falsy are considered truthy. 
Some examples of truthy values include:
- true
- {} (empty object)
- [] (empty array)
- " " (string has a space)
- "0" (string with a character)
- "false" (string with a character)
- 42 (any non-zero number)
- new Date() (any date object)
- function(){} (any function) */

//Verify whether an array is empty
const arr = [];
if(arr.length === 0) {
    console.log("Array is empty");
} 

// verify if an object is empty
const emptyObject = {};
if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??) : null undefined
let val1;
val1 = null ?? 10;
console.log(val1);
val1 = 5 ?? 10;
console.log(val1);
val1 = undefined ?? 20 ?? 4;
console.log(val1);

// Terniary operator
// condition ? true : false

const iceTeaPrice = 10;
iceTeaPrice >= 80 ? console.log("price is higher than 80") : console.log(`iceTeaPrice: ${iceTeaPrice}`)