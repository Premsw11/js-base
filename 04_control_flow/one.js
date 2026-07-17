const isUserLoggedIn = true;
if(2 == "2") {
    console.log("executed");
}

if(2 === "2") {
    console.log("not executed");
}

const temperature = 30;
if(temperature > 30) {
    console.log("It's a hot day");
} else if(temperature < 30) {
    console.log("It's a cold day");
} else {
    console.log("It's a normal day");
}

const useLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromFacebook = false;
if(useLoggedIn && debitCard && 2 == 2) {
    console.log("You can buy the course");
}

if(loggedInFromGoogle || loggedInFromFacebook) {
    console.log("You can login");
}
