// apply map() on array
// this will change the values and return an array
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.map((num) => num + 10);
console.log(newNums);

//Method chaining means in a single step you are applying multiple methods, 
// since each method is returning same object

let methodChainingNumber = myNums.
                            map((num) => num + 10);
console.log(`methodChainingNumber ${methodChainingNumber}`);

methodChainingNumber = myNums
                        .map((num) => num + 10)
                        .map((num) => num + 1);
console.log(`methodChainingNumber ${methodChainingNumber}`);

methodChainingNumber = myNums
                            .map((num) => num * 10)
                            .map((num) => num + 1)
                            .filter((num) => num > 40);
console.log(`methodChainingNumber ${methodChainingNumber}`);