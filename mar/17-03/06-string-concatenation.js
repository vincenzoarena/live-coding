/**
 * String concatenation with the + operator
 * 
 * If we use the + operator on a series of strings, or a string and number, as a result
 * we get a new string with all the parts combined together
 * 
 * Examples:
 * 
 * "hello" + "world" => "helloworld"
 * 
<<<<<<< HEAD
 * "my favorite number is " + 21 => "my favorite number is 21"
=======
 * "my favourite number is " + 21 => "my favourite number is 21"
>>>>>>> b222ca422f3f654f80ed88d5002cff84322d1f5b
 */

"100" + 2; // "1002"

console.log("hello" + "world"); // "helloworld"
<<<<<<< HEAD
 
console.log("hello" + " world"); // "hello world"
 
console.log("hello " + "world"); // "hello world"
 
console.log("hello" + " " + "world"); // "hello world"
 
let firstName = "Carlo";
let countryOfOrigin = "Italy";
let currentCity = "Berlin";
 
=======

console.log("hello" + " world"); // "hello world"

console.log("hello " + "world"); // "hello world"

console.log("hello" + " " + "world"); // "hello world"

let firstName = "Carlo";
let countryOfOrigin = "Italy";
let currentCity = "Berlin";

>>>>>>> b222ca422f3f654f80ed88d5002cff84322d1f5b
console.log("Hello, my name is" + " " + firstName  +  ". I come from " + countryOfOrigin + " and I live in " + currentCity);