//console.log(alert("Hello World!"));
//console.warn("This is a warning")

//HOW TO SET VARIABLES
//var, let, const -> var is globally scoped (do not use var if possible ES6)
// with let we can reassign values
// const is a constant, cannot be directly reassigned
// (always use this if you're not going to reassign the value)


// DATA TYPES

// strings, numbers, boolean, null, undefined, symbol (added in ES6)

const name = 'Anca';
const age=31;
const rating=4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

//console.log(typeof z)

//STRINGS

// concatenation with TEMPLATE LITERALS
console.log(`My name is ${name} and I am ${age}`);

// STRING PROPERTIES AND METHODS
const s = "Hello World!";

//length of the string
console.log(s.length)

// change to uppercase
console.log(s.toUpperCase())

// change to lowercase
console.log(s.toLowerCase())

// substring s
console.log(s.substring(0,5))

// split  stirng into an array
console.log(s.split(''))

let p = "Hello"
console.log(p)
p = p.toUpperCase()
console.log(p)

// ARRAYS - variables that hold multiple values (data structures actually)
//arrays can hold any data type, not just only strings or only numbers
// array constructor
const numbers = new Array(2,3,4,5)
console.log(numbers)

const fruit = ["apples", "oranges", "blabla"]
console.log(typeof fruit[0], fruit[0])

//apend to list (at the end)
fruit.push("mango")
console.log(fruit)

// add item at the beginning of the list
fruit.unshift("pear")
console.log(fruit)

// take the last item out
console.log(fruit.pop())
console.log(fruit)

//check if smth is an array
console.log(Array.isArray(fruit))

//get the index of a certain value
console.log(fruit.indexOf("oranges"))

// OBJECT LITERALS = key value pairs
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main street",
        city: "Boston",
        state: "MA"
    } 
}

console.log(person);
console.log(person.lastName);
console.log(person.address.city);

// use destructuring (pulling something out of a dictionary)
const { firstName, lastName, address: {city} } = person;
console.log(city);

//add properties
person.email = "john.gmail.com"
console.log(person)

// list of dictionaries
const todos = [
    {
        id: 1,
        text: "Take out trash",
        completed: true
    },
    {
        id: 2,
        text: "Meeting with boss",
        completed: true
    },
    {
        id: 3,
        text: "Dentist appointment",
        completed: false
    },
]

// console.log(todos[1].text)
// convert todos to JSON
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)

// FOR LOOPS
for(let i = 0; i < 20; i++) {
    console.log(i)
}
// WHILE LOOPS
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

// LOOP THROUGH ARRAYS
for (let i=0; i<fruit.length; i++) {
    console.log(`Looping through fruit array: ${i} ${fruit[i]}`)
}

// better way to loop through arrays
for (let todo of todos) {
    console.log(todo.id);
}

// HIGH ORDER ARRAY METHODS
//FOR EACH, MAP, FILTER

todos.forEach(function(todo) {
    console.log(todo.text)
});

// map returns an array
    const todoText = todos.map(function(todo){
        return todo.text;
})

console.log(todoText)

// filter - return the todos that are completed: true
const todoFilter = todos.filter(function(todo) {
    return todo.completed == true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoFilter)

// CONDITIONALS
const m = 10;

if (m==10) {
    console.log("m is 10")
}

// TRIPLE = SIGN MATCHES ALSO THE DATA TYPE
const n = "10";
if (n==10) {
    console.log("n is 10")
}
if (n===10) {
    console.log(n)
}
else {
    console.log("n is not a string")
}