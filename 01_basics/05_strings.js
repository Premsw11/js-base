//string can be denoted using single quotes, double quotes or backticks
const name = "Yeeyansh";
console.log(`my son name is ${name}`); // using backticks and template literals 
const wifeName = new String('Priya'); // using String constructor
console.log(wifeName[1]); // using index to access the character at index 1
console.log(wifeName.length); // using length property to get the length of the string

console.log(wifeName.__proto__.toUpperCase.call(wifeName)); // using toUpperCase method to convert the string to uppercase

console.log(wifeName.toLowerCase()); // using toLowerCase method to convert the string to lowercase

console.log(wifeName.includes('riya')); // using includes method to check if the string contains a substring

console.log(wifeName.startsWith('Pri')); // using startsWith method to check if the string starts with a substring

console.log(wifeName.endsWith('ya')); // using endsWith method to check if the string ends with a substring

console.log(wifeName.indexOf('i')); // using indexOf method to get the index of the first occurrence of a substring

console.log(wifeName.lastIndexOf('i')); // using lastIndexOf method to get the index of the last occurrence of a substring

console.log(wifeName.replace('Priya', 'Pooja')); // using replace method to replace a substring with another substring

console.log(wifeName.slice(0, 4)); // using slice method to extract a substring from the string

console.log(wifeName.split('')); // using split method to split the string into an array of substrings

console.log(wifeName.trim()); // using trim method to remove whitespace from both ends of the string

console.log(wifeName.charAt(2)); // using charAt method to get the character at a specific index

console.log(wifeName.charCodeAt(2)); // using charCodeAt method to get the Unicode value of the character at a specific index

console.log(wifeName.concat(' is my wife')); // using concat method to concatenate two strings

console.log(wifeName.repeat(3)); // using repeat method to repeat the string a specified number of times

console.log(wifeName.padStart(10, '*')); // using padStart method to pad the string with a specified character at the start

console.log(wifeName.padEnd(10, '*')); // using padEnd method to pad the string with a specified character at the end

console.log(wifeName.localeCompare('Priya')); // using localeCompare method to compare two strings

console.log(wifeName.match(/ya/g)); // using match method to find all occurrences of a substring using a regular expression
    
console.log(wifeName.search(/ri/)); // using search method to find the index of the first occurrence of a substring using a regular expression

console.log(wifeName.replace(/ri/g, 'ra')); // using replace method to replace all occurrences of a substring using a regular expression

console.log(wifeName.split('')); // using split method to split the string into an array of substrings

console.log(wifeName.toString()); // using toString method to convert the string object to a string primitive

console.log(typeof wifeName.valueOf()); // using valueOf method to get the primitive value of the string object

console.log(wifeName.substring(0, 4)); // using substring method to extract a substring from the string

console.log(wifeName.substr(0, 4)); // using substr method to extract a substring from the string

console.log(wifeName.sup()) // using sup method to create a string with superscripted characters

console.log(wifeName.at(2)); // using at method to get the character at a specific index

console.log(wifeName.charAt(2)); // using charAt method to get the character at a specific index
console.log(wifeName.charCodeAt(2)); // using charCodeAt method to get the Unicode value of the character at a specific index
console.log(wifeName.codePointAt(2)); // using codePointAt method to get the Unicode code point of the character at a specific index

console.log(wifeName.constructor); // using constructor property to get the constructor function of the string object

console.log(wifeName.fixed()); // using fixed method to create a string with fixed-width font

console.log(wifeName.fontcolor('red')); // using fontcolor method to create a string with a specified font color

console.log(wifeName.fontsize(5)); // using fontsize method to create a string with a specified font size

console.log(wifeName.italics()); // using italics method to create a string with italicized characters

console.log(wifeName.link('https://www.google.com')); // using link method to create a string with a hyperlink

console.log(wifeName.small()); // using small method to create a string with small characters

console.log(wifeName.strike()); // using strike method to create a string with strikethrough characters

console.log(wifeName.sub()); // using sub method to create a string with subscripted characters

console.log(wifeName.slice(-3)); // using slice method to extract a substring from the string

console.log(wifeName.slice(0, -3)); // using slice method to extract a substring from the string

console.log(wifeName.slice(-3, -1)); // using slice method to extract a substring from the string