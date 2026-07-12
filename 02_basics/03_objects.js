// object declaration using literals won't create singleton object
// object declaration using constructor will create singleton object
// object.create or new Object() is used for object creation using constructor

console.log("start of the program");

const mySym2 = Symbol("Key2");
const jUser = {
    name: "Yeeyansh",
    "full name": "Yeeyansh Kalal",
    age: 2,
    location: "Jaipur",
    email: "premsw11@gmail.com",
    mySym1: "key1",
    [mySym2]: "myKey2", 
    isLoggedIn: false,
    lastLoginTrace: ["Monday, Wednesday"]

}



console.log(jUser.email);
// console.log(jUser[email]); Will throw error that email not defined
console.log(jUser["email"]);

console.log(jUser["full name"]);
console.log(jUser["mySym1"]);
console.log(jUser[mySym2]);
console.log("jUser[\"mySym1\"] : " ,typeof jUser["mySym1"], ", This is String type not symbol");
console.log("jUser[mySym2] : " ,typeof jUser[mySym2], ", This is actual Symbol type"); // don't use string inside jUser[] to access the mySym2
console.log(typeof mySym2, "This is the type of mySym2")

// here mySym2 the key is of Symbol type, but the value of mySym2 is "myKey2" i.e. string type and could be on any tyep

jUser.email = "updatedEmail@gmail.com"; // object values are updated in this way
console.log(jUser);

//Object.freeze(jUser);
// now object changes are not allowed after Object.freeze()

jUser.location = "Noida";
console.log(jUser);

jUser.greeting = function() {
    console.log("Welcome JS User !!");
}

jUser.greetingTwo = function(input) {
    console.log(`The ${input} value is ${this[input]}`);
}

console.log("jUser.greeting ,", jUser.greeting);
console.log("jUser.greeting() ,");
jUser.greeting();
console.log(jUser);

jUser.greetingTwo("name");

jUser.greetingTwo("location");