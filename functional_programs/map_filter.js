// .map() - will make a copy of an array and apply our own twist - essentially returning an array of strings 
// resembling html "list items"
// Applies a callback function to each item in an array and returns that new array
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList);

// using map with an array of numbers
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes);



// .filter()
// Below creates a list of only the even values
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter( val => val % 2 === 0 );
console.log(`Filtered evens: ${evens}`);
const odds = numbers.filter( val => val % 2 !== 0 );
console.log(odds);

// If we want only the groceries that have the letter "o" in them
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods);


const values = [1, 2, 3, 4, 5];
const oddCubes = values.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes);



