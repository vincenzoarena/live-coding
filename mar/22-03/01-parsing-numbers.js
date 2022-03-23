/**
 * Parse
 * 
 * "922fdslafj" => 922
 * 
 * parseInt() -> Gives you an integer value
 * 
 * parseFloat() -> Gives you a decimal value
 */

let jakeHeight = "172cm";
let mariaHeight= "192cm";

let numberJakeHeight =  parseInt(jakeHeight);
let numberMariaHeight =  parseInt(MariaHeight);
// Calculate the difference in cm between Jake and Maria

console.log(numberMariaHeight - numberJakeHeight);

console.log("Parsed Jake's height", parseInt(jakeHeight));
console.log("Parsed Maria's height", parseInt(mariaHeight));

let money = "5.52€";

console.log(parseInt(money)); // 5
console.log(parseFloat(money)); // 5.52

console.log(parseInt("abc123abc")); // NaN => Not a number
console.log(parseInt("abcdef")); // NaN => Not a number
console.log(parseInt("123abcdef456zyw8910")); // 123
console.log(parseInt("123")); // 123

parseInt()

parseFloat()