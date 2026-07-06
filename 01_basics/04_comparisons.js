console.log("2" > 1); // true since 2 is greater than 1
console.log("02" > 1); // true since 2 is greater than 1
// This is drawback of JS, here the TS wins

console.log(undefined == null); // true since both are considered equal in  
console.log(null  ==  0 ); // false since null is only equal to undefined and not equal to any other value

console.log("1" === 1); // false since both are not equal in
//  strict comparison

// A variable defined but the value is not assigned to it, 
// then it will be undefined