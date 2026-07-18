//reduce on array will return a single number
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const finalValue = myNums.reduce((accumulate, current) => {
    console.log(`current ${current} and accumulate ${accumulate}`)
    return accumulate + current;
}, 10);
console.log(`finalValue ${finalValue}`);

const shoppingCart = [
    {
        courseName: "JavaScript",
        courseFee: 999
    },
    {
        courseName: "Mobile development",
        courseFee: 1999
    },
    {
        courseName: "Python",
        courseFee: 2999
    },
    {
        courseName: "Data Sciense",
        courseFee: 12999
    }
]

const totalPrice = shoppingCart.reduce((accumulator, current) => {
        return accumulator + current["courseFee"];   
}, 0 ); // If you don't define initial value here, than this will be not getting the 
// initial value for total and Object will be printed. so mention 0 for initial here
console.log(`Shopping Cart total price: ${totalPrice}`);