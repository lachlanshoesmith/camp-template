// Assuming you're familiar with Python, here's some code that
// is the equivalent of what you're used to typing in Python.

console.log('Hello, World!'); // print('Hello, World!')
alert('Hello, World!'); // puts a popup on the screen

// In JavaScript, variables are defined with a 'let' or 'const'
// keyword. We use 'let' when we want to allow the value of
// the variable to be change, and we use 'const' when it's
// never gonna change.
let random_number = 5;
const pi = 3.14;

// In JavaScript, you can end your lines of code with semicolons.
// This isn't something you're probably used to in Python.
// It's kind of optional in JS, but it's good practice to add it
// anyway because it (very) rarely doesn't work.
let z = 'hello';

// If statements
if (5 > 3) {
  console.log('5 is greater than 3');
} else if (10 < 15) {
  console.log('10 is less than 15');
} else {
  console.log('None of the above statements were true.');
}

// When we check if something's equal, we usually use ===
// instead of ==, whereas in Python you just use ==.
if (5 === 5) {
  console.log('5 is equal to 5');
}

// While loops are basically the same as Python.
while (true) {
  // ...
}

let x = 5;
while (x === 5) {
  x--;
}

// For loops are quite verbose in JS (and many other languages).

for (let i = 0; i < 10; i++) {
  // ...
}

// We can iterate over an array.

let arr = [1, 2, 3];
arr.forEach((item) => {
  // do stuff
});

// There's a couple different ways to define functions.

/*
    def multiply(x, y):
        return x * y
*/

function multiply(x, y) {
  return x * y;
}

// Or you can do it in one line this clever way...

const multiply = (x, y) => x * y;

// JavaScript supports dictionaries, like Python.
// We typically them objects in JS, or more generally hashmaps/hash tables.
const favourite_foods = {
  lachlan: 'ravioli',
  allyssa: 'biryani',
  sophie: 'pizza',
  katie: 'sushi',
};
