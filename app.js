/* Give a variable for my name */
let name = 'Jean-Luc';

/* Give a constant for how many states there are */
const states = 50;

/* Find the sum of 5 plus 4 */
let sum = 5 + 4;

/* If your name starts with a letter after L(ASCII code: 76), give first message, if it's before give second message */
if (name.charCodeAt(0) > 76) {
    alert('Back of the line!');
} else {
    alert('Next!');
}

/* A function that should display the given message */
function sayHello() {
    alert('Hello World');
}

/* Calling said function */
sayHello();

/* A function for checks your age to see if you are 21 are not */
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

/* Call the checkAge function 4 times with different people */
checkAge('Charlie', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

/* A list of favorite vegetables */
let favVeggie = ['corn', 'spinach', 'potatoes', 'califlower', 'cucumber'];

/* Use a loop to display the veggies in the console */
for (i = 0; i < favVeggie.length; i++) {
    console.log(favVeggie[i]);
}

/* Create an array of 5 objects with name and the age */
let people = [
    {name: 'Jeff', age: 16},
    {name: 'Mary', age: 25},
    {name: 'Daniel', age: 21},
    {name: 'Tommy', age: 20},
    {name: 'Rebecca', age: 23},
]

/* Call checkAge for the array above */
for (i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

/* Create function that checks how many characters are in a string */
function getLength(word) {
    return word.length;
}

/* Call function with Hello World */
let result = getLength('Hello Word');

/* Created an if else statement that show said string has either a even or odd number of characters in string */
if (result % 2 == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}