const user = {
    username: 'Yeeyansh',
    price: 999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username} to Uniara`);
        console.log(this);
    }
}
console.log(user.welcomeMessage()); // Welcome Yeeyansh to Uniara
user.username = "Priya";
console.log(user.welcomeMessage()); // Welcome Priya to Uniara

console.log(this); // this will point to window object in browser and global object in nodejs
                    //here this is giving empty object since no global object os defined.  

function chai() {
    let name = "Yeeyansh";
    //console.log(this);
    console.log(`this.name: ${this.name}`); // this.name is undefined since this is pointing to global object and name is not defined in global object
                                            // name is defined with let keyword, so it is not accessible outside the function scope.
                                            // this.name would work if it was used in an object or class method, where this refers to the instance of the object or class.
}
chai();   


//++++++++++++++++++++ Arrow function ++++++++++++++++++++

const arrowFunction = () => {
    let name = "Yeeyansh";
    console.log(`this.name: ${this.name}`); // this.name is undefined since this is pointing to global object and name is not defined in global object
                                            // name is defined with let keyword, so it is not accessible outside the function scope.
                                            // this.name would work if it was used in an object or class method, where this refers to the instance of the object or class.
}
arrowFunction();

const addTwo = (num1, num2) => { // curly braces are used to define the function body, 
                                // so we need to use return statement to return the value
    return num1 + num2;
}
console.log(addTwo(5,10));

const addTwo_1 = (num1, num2) => num1 + num2;
console.log(addTwo_1(1,10));

const addTwo_2 = (num1, num2) => (num1 + num2); // small brackets are used to group the expression, 
                                                    // so we don't need to use return statement
console.log(addTwo_2(2,10));

const addTwo_3 = () => 2;
console.log(addTwo_3(3, 15)); // 2, since we are not using any parameter in the function, so it will always return 2

//retrun object from arrow function
const pwd = (num1, num2) => {password   : num1 + num2}; // this will return undefined, 
                                // since we are using curly braces to define the function body,
console.log(pwd(5,10)); // undefined

const pwd_1 = (num1, num2) => ({password   : num1 + num2}); // this will return object, 
                                // since we are using small brackets to group the expression, 
console.log(pwd_1(5,10)); // { password: 15 }                                    