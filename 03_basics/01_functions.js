function addNumber(number1, number2) {
    return number1 + number2;
}

console.log(addNumber(3)); //return NaN missing parameter in JS becomes undefined, undefined addition gives NaN
console.log(addNumber(3, 4));
console.log(addNumber(3, null)); // return 3, null becomes zero in addition

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage("Prem"));
console.log(loginUserMessage()); //If parameter is not passed into a parameterized function
                                // then parameter value would be undefined 
//if("") is considered as false in JS
//if(undefined) is also consideres as false in JS

function loginUserMessageNew(username = "Sam") {  // Sam is default value defined, if no value is passed
    if(!username) {                                 // won't go never in if condition 
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessageNew());

// we don't know how many items customer going to purchase
function calculateCartPrice(...num1) {   //also called rest operator 
    return num1;
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Sam",
    price: 999
};

function handleObject(anyObject) {
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

handleObject({
    username: "Prem",
    price: 500
}); // object is created and passed in function argument only

const myNewArray = [100, 400, 200, 600];

function returnSecondValue(arr) {
    return arr[1];
}

console.log(returnSecondValue(myNewArray));