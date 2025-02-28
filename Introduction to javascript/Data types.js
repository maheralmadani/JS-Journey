/*
Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.
Primitive Data Types

JavaScript uses seven primitive data types that are listed in the table below:
Data Type 	Wrapper Object 	Description
number 	Number 	Any number, including numbers with decimals: 1, -2, 99, 3.14.
bigint 	BigInt 	Any number, greater than 253-1 or less than -(253-1) with n appended to the number: 1234567890123456n.
string 	String 	Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single '' or double "".
boolean 	Boolean 	This data type only has two possible values — either true or false.
null 	None 	This data type represents the intentional absence of a value, and is represented by the keyword null.
undefined 	None 	This data type is denoted by the keyword undefined. It also represents the absence of a value though it has a different use than null.
symbol 	Symbol 	A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Objects

Objects are a little more complex since they are collections of related data.

    Note: The null type cannot be tested with typeof like all the other primitive types because it will return "object". This must be tested with the type equality operator (i.e., === null).

Number and BigInt

In JavaScript, numbers are always stored as double-precision floating point numbers.
*/

let num = 7;
let bigNum = 9999999999999999n;

// BigInt is necessary for large whole numbers because they are unreliable with the Number type:

console.log(9999999999999999);
console.log(9999999999999999n);

// This will output the following:

10000000000000000
9999999999999999n

// The integer precision for the Number type is 15 digits. The following example is runnable:

let x = 999999999999999;
let y = 9999999999999999;
console.log(x);
console.log(y);

999999999999999
10000000000000000

// String

// Strings in JavaScript can be defined with either ' ' or " ".

let greeting = 'Hi buddy';
let message = 'You are doing great! Keep studying!';

// To find the length of the string, the built-in length property is used. Run the following example to get a better idea:
let text = "abracadabra";
console.log(text.length);

11

// Boolean

// Boolean is for truthy or falsy values:

let lateToWork = true;
let isTheEarthFlat = false;

// To convert a non-boolean value into a boolean, the Boolean function or double not !! is used. Run the following code block to see how Boolean() works:

let value = Boolean('Harry');
console.log(value);

true

// Null and Undefined

// Null and Undefined are both for the absence of a value, but they have different meanings.

// Undefined means there should be some values, but it is undefined now
let finishCourseTime = undefined;

// Null means there is no value here
let finishStudyingDate = null;

// A function also outputs undefined when no value is returned.

function help() {
    // no return statement
  }
  console.log(help());

undefined

// The same function outputs null when null is returned.

function help() {
    return null;
  }
  console.log(help());

null

// Object

// Objects can have fields with different values and types inside:

const user = {
  name: 'Jane',
  age: 20,
  isActive: true,
};

// Alternatively, an empty object can be initialized and the properties added to the object. Run the code below to see it in action:

const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(person);

{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' }






/*
Data Types
8 min

Preview: Docs Data types are used to classify eight fundamental values used for programming in JavaScript, including primitive and object types.
Data types
are the classifications we give to the different kinds of data that we use in programming. In JavaScript, there are eight fundamental data types:

    Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
    BigInt: Any number, greater than 253-1 or less than -(253-1), with n appended to the number: 1234567890123456n.
    String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", though we prefer single quotes. Some people like to think of string as a fancy word for text.
    Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches or as the answers to a “yes” or “no” question.
    Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
    Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. undefined means that a given value does not exist.
    Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
    Object: Collections of related data.

The first 7 of those types are considered primitive data types. They are the most basic data types in the language. Objects are more complex, and you’ll learn much more about them as you progress through JavaScript. At first, eight types may not seem like that many, but soon you’ll observe the world opens with possibilities once you start leveraging each one. As you learn more about objects, you’ll be able to create complex collections of data.

But before we do that, let’s get comfortable with strings and numbers!
*/

console.log('Location of Codecademy headquarters: 575 Broadway, New York City');
console.log(40);

/*
In the example above, we first printed a string. Our string isn’t just a single word; it includes both capital and lowercase letters, spaces, and punctuation.

Next, we printed the number 40, notice we did not use quotes. 
*/