let myDate = new Date();

console.table([myDate.getTimezoneOffset(), myDate.getDate()]);
let myCreatedDate = new Date();

console.log([myCreatedDate.toLocaleDateString(), myCreatedDate.toLocaleString()]);

let currentDate = Date.now();
console.log(currentDate);
console.log(myCreatedDate.getHours());

console.log(myCreatedDate.toLocaleString('en-IN', {
    dateStyle: "long",
    timeStyle: "long",
    timeZone: "Asia/Kolkata"
}));
console.log(myCreatedDate.toLocaleString());