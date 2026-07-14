

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;
}

//console.log(a); //not accessible outside the scope
//console.log(b); //not accessible outside the scope
console.log(c); //c is accessible due since defined using var
console.log(d); //d is not defined with any const, let, var keyword, so this is also accessible

// Below example is also of closure example, {} braces is scope
function one() {
    let name = "Yeeyansh";
    function two() {
        const website = "Youtube";
        console.log(name);
    }
    
    two();
    //console.log(website); // website is not accessible outside the inner function
}

one();

// ++++++++++++ interesting ++++++++++++
// This is called a simple function

console.log(addOne(5)); // calling function before declaration, This will work, 
// since function is define in simple way
console.log("inserted in between the function call and function declaration");
function addOne(num) {
    return num + 1;
}



// addTwo is called a expression, since this is holding the function

console.log(addTwo(5)); // will throw error cannot access addTwo before initialization
// This is also related to hoisting concept of JS and execution tree
const addTwo = function(num) {
    return num + 2;
}
addTwo(5);