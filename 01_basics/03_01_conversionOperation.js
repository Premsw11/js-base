let flag = false;

console.log(typeof flag);

let flagNumber = Number(flag);
console.log(typeof flagNumber); 
console.log(flagNumber); // 0 since flag value is false

let isLoggedIn = 1;
console.log(typeof isLoggedIn);

let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(typeof isLoggedInBoolean);
console.log(isLoggedInBoolean); // true since isLoggedIn value is 1

let emptyString = "";
console.log(Boolean(emptyString)); // false since emptyString value is ""

let filledString = "Hello";
console.log(Boolean(filledString)); // true since filledString value is "Hello"