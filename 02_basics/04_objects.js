const tinderUser = new Object(); //create a singleton object
//console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUserName = {
    email: "some@gmail.com",
    fullName: {
        userfullname : {
        firstname: "Yeeyansh",
        lastname: "Kalal"
        }
    }
}

console.log(regularUserName.fullName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = {obj1, obj2};
//console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2);
//console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const users = [
    {
        id: 1,
        name: "abc"
    },
    {
        id: 2,
        name: "abc"
    },
    {
        id: 3,
        name: "abc"
    }
];

console.log(users[1]);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name1"));
console.log(tinderUser.hasOwnProperty("id"));

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "Hitesh Chaudhary"
}

//below is object destructuring
const {courseInstructor} = course;
console.log(courseInstructor);

//In another way
const {courseInstructor: instructor} = course;
console.log(instructor);

//difference between JS object and JSON is that JSON has keys as String, however JS object keys
// not have to be defined as string explicitly.