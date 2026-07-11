const myArray = [0, 1, 4, 3];
console.log(myArray[0]); 

const arr1 = new Array(3, 5, 7);
console.log(arr1);

myArray.push(6);
console.log(myArray);

console.log(myArray.pop());

myArray.unshift(9);
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(3));

//slice will not change the original array
//splice will change the original array

const arr = [0, 1, 2, 3, 4, 5];
const sliceArray = arr.slice(1,3);
console.log(sliceArray);
console.log("A ", arr);

const spliceArray = arr.splice(1,3);
console.log("spliceArray ", spliceArray);
console.log("B ", arr);
