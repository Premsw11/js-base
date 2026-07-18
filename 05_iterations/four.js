// for in
// for in loop returns keys only
// Arrays has also keys, which starts from index 0
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
}

// for in will not works for Map
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United States of America"),
myMap.set("FR", "France");

for (const key in myMap) {
    console.log(`country short code ${key} and full name ${myMap[key]}`); // nothing will print
}

const languages = ["js", "cpp", "rb", "swift", "java"];
for (const key in languages) {
    console.log(`This is key of languages Array: ${key}`)
}