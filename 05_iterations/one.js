//const arr; const has to be initialized in the same step only, 
// otherwise missing initializer error 

let arr;
arr = [1, 2, 3, 4, 5];
for(let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

// if we go out iof Index in JS, then it won;t throw error as ArrayIndexOutOfBounds Exception.
//instead this will retrun undefined in JS.

for(let index = 1; index <=20 ; index++) {
    if(index == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`value of index: ${index}`)
}

for(let index = 1; index <=20 ; index++) {
    if(index == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`value of new index: ${index}`)
}