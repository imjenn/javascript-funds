// Immutable list of groceries
const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

// Say we need to add "thyme" to the list 
// Use spread to make a copy of the list and add thyme
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
console.log(needThyme)

// Can also use .concat() 
// const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

// If we find that we already have thyme and want to set haveIngredient to true
const gotTheThyme = [ ...needThyme.slice(0, 5), {...needThyme[5], "haveIngredient": true } ];

// If celery is "ingredient non grata", remove using slice
 const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];




// Sorting
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 

// we can use the spread operator instead
const sortedItems = [...items].sort();
console.log(sortedItems);

// Sort works by converting the values into strings before sorting

const sortedGroceries = [...items].sort( (a, b) => a.item > b.item ? 1 : -1);
console.log(sortedGroceries);