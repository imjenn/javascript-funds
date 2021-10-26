const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    createdAt: 1543945177623
};
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// Before ES6
// var email = person.email;
// var firstAnimal = animals[0];

// AFTER ES6 with destructuring
const { email } = person;
const [firstAnimal] = animals;
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse

// Code that is not very pretty but verbose
// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// With destructuring
const { email, password } = person;
const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// Below is an example of accessing the property (before the colon) of our object followed by our new variable of hashedPassword
const password = '12345';
const { password: hashedPassword } = person;





// Nested Destructuring
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

// Destructuring each address if we want the individual addressess as variables
const { addresses: [whiteHouse, sherlock] } = person;
console.log(whiteHouse);
console.log(sherlock);

// Perhaps we skip the first address and only want the city of the second, using an alternate var name
// The empty comma allows skipping that index and destructuring from the second address
const { addresses: [, { city: london }] } = person;
console.log(london); // => London

// Below will produce an error. Though skipping indices can be performed to any depth, we need to assure that 
// it exists for us to skip.
const { addresses: [, , , , { city: london }] } = person;




// Rest and spread
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

const { firstName, lastName, ...attributes } = person;
console.log(attributes); // Logs all keys and values in object person

// Using spread, we can make copies of objects or arrays
const personCopy = { ...person };

// Copy is shallow so any nested structures with objects references
// will still point to the same object
const personCopy = { ...person };
personCopy === person
// => false
personCopy.addresses === person.addresses
// => true



