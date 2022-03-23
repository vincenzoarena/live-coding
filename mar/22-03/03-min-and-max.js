/**
 * 
 * Sales: 100, 0.5, 99, 76, 1, 235, 99, 0.9, 12
 * 
 */

// Get the highest sale of the list
console.log(Math.max(100, 0.5, 99, 76, 1, 235, 99, 0.9, 12)); // 235
console.log(Math.min(100, 0.5, 99, 76, 1, 235, 99, 0.9, 12)); // 0.5

let jakeAge = 19;
let mariaAge = 25;

let greaterAge = Math.max(jakeAge, mariaAge);
let smallerAge = Math.min(jakeAge, mariaAge);

// I want to know the age difference between Jake and Maria.
// The result must be a positive number.

let ageDifference = jakeAge - mariaAge;

console.log(ageDifference); // <--- In this case we have a negative number.

let ageDifference2 = greaterAge - smallerAge;

console.log(ageDifference2);