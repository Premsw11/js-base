const coding = ["Java", "JavaScript", "Python", "C++", "Ruby"];

//forEach loop doesn't retrun anything. It returns void and value as undefined
// but filter will return values to you, as per predicate condition.
// filter has callback function as an argument
//filter will return an array, containing elements of main array, qualifying the condition
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ArrayLesserTo5 = myNums.filter((value) => {
     return value < 5;
});
console.log(ArrayLesserTo5);

const ArrayDivisibleBy2 = myNums.filter( (value) => {
    return value % 2 == 0;
});
console.log(`ArrayDivisibleBy2 ${ArrayDivisibleBy2}`);

const books = [      
    { 
        title: 'Book One' , genre: 'Fiction', publish: 1981, edition: 2004 
    },
    { 
        title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 
    },      
    { 
        title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 
    },      
    { 
        title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 
    },
    { 
        title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 
    },      
    { 
        title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 
    },
    { 
        title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 
    },      
    { 
        title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016
    },
    { 
        title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989
    }
];    

let userBooks = books.filter((book) => book.genre == "History")
console.log(userBooks);

userBooks = books.filter((book) => { return (book.publish >= 1990 && (book.genre == "Non-Fiction" || book.genre == "Fiction")) } );
console.log(userBooks);