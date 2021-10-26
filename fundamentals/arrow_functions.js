// Anonymous function is a function without a name
// ES6 introduces a shortened syntax 

// Before
var sayHello = function (name) {
    console.log('Hello ' + name);
};

sayHello('Jenn');

// After
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

sayHello('Jenn')

// We omitted the function keyword 
// For simple methods, we can refine it more.
// Single params don't need parens and if the body is a single statement, we can remove the {}
const sayHello = name => console.log('Hello ${name}');

// Concise and more complex functions will need ({})
// Simple expressions will have implicit returns
var square = function (n) {
    return n * n;
};

// The above will become:
const square = n => n * n;






// Arrow functions for returning an object
// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return {
        firstName: 'John',
        lastName: 'Wick'
    }
}
/**
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
const returnObj = () => { firstName: 'John', lastName: 'Wick' }
// surrounding the implicit return with parenthesis solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });


