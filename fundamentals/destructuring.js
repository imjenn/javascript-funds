// For the following five blocks of code, predict the output. 
// If a line of code will throw an error, state the error.

// Problem 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// Prediction:
// Tesla
// Mercedes



// Problem 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Prediction:
// Error - name is undefined.
// Elon



// Problem 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// Prediction: 
// 12345
// 12345 -- this is undefined since password key does not exist in object person



// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// Notes
// first = 2
// second = 5
// 2 !== 5  => False
// third = 2
// 2 === 2 => True

// Prediction:
// False
// True



// Problem 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// Prediction
// { key: 'value', secondkey: [1, 5, 1, 8, 3, 3] } -> value
// { key: 'value', secondkey: [1, 5, 1, 8, 3, 3] } -> [1, 5, 1, 8, 3, 3]
// 1
// 5