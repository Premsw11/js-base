const marvel_heros = ["Thor", "Ironman", "Spiderman"];
const dc_heros = ["Superman", "Flash", "Bat"];

//marvel_heros.push(dc_heros);
console.log(marvel_heros);

console.log(marvel_heros.concat(dc_heros)); //concat will return new Array

//spread operator will spread the array elements
const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

// flat will make inner array objects into the same array, Infinity is depth of the inner arrays
const real_another_array = [1, 2, 3, [4, 6, 3], [3, 4, [5, 7]]];
const another_array = real_another_array.flat(Infinity);
console.log(another_array);

console.log(Array.isArray("Yeeyansh"));

console.log(Array.from("Yeeyansh"));

console.log(Array.from({ name: "Prem"})); //interesting will have to learn that array from keys or values

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
console.log(Array.from(score1));
