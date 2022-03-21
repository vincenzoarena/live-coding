/**
 * Conditional (ternary) operator
 *
 * let result = condition ? expressionIfTrue : expressionIfFalse
 *
 * - a condition is an expression that results in a true or false value
 */

let result = "hello" === "hello" ? 2 : 99;
console.log(result);

let result2 = "hey" === "hello" ? 2 : 99;
console.log(result2);

let result3 = true ? 2 : 99;
console.log(result3);

let result4 = false ? 2 : 99;
console.log(result4);

let isLoggedIn = false;
let welcomeMessage = isLoggedIn
  ? "Welcome back to our shop!"
  : "Please log in to proceed";
console.log(welcomeMessage);

let password = "abc";
// password.length
// password.length > 8
console.log(
  `The password you chose is ${password.length > 8 ? "ok" : "too short"}`
);
