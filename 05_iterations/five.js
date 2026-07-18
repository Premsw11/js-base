//forEach function works on an Array
//callabck function is an argument of the forEach().
//forEach is also known as High Order Function
//callback function must not have name
const coding = ["Java", "JavaScript", "Python", "C++", "Ruby"];
coding.forEach(function (val) {
    console.log(val);
});

console.log("forEach with Arrow function");

coding.forEach((val, index, arr) =>
    console.log(val, index, arr)
);

function printMe(item) {
    console.log(item);
}

console.log("print using your own function passing as callback function in foreach loop")
coding.forEach(printMe); // should give only refrenece of function. 
// Should not invoke function by printMe()\

console.log("working with myCoding")
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
];
myCoding.forEach( (item) => {
        console.log(item.languageName); 
        console.log(item["languageName"]);    
        console.log(`Language name ${item["languageName"]} and extension ${item["languageFileName"]}`); 
    }   
)