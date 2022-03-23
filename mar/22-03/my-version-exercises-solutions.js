// Basic String Methods

/**
 * Task 1
 * 
 * Declare a variable with the value of "I can walk in the park all day!". 
 * 
 * Output the word "park" to the console.
 * 
 */

 let statement = "I can walk in the park all day!";

 //The method .indexof() could give us the index of a character inside another string
 console.log(statement.substring(18, 22));
 console.log(statement.slice(18, 22));
 console.log(statement[18] + statement[19] + statement[20] + statement[21]);

 // ✅

/**
 * Task 6
 * 
 * Starting from a string, create a new string from with the first character of the given string added at the front and back
 * 
 * Examples:
 * Starting string: "Bananas"
 * 
 * Expected output:
 * 
 * ```js
 * BBananasB
 * ```
 * 
 */

let fruityString = "Bananas";

/**
 * string[0]
 * string.substring(0,1)
 * string.slice(0,1)
 * 
 * Look the other possible solutions below:
 */


console.log(fruityString[0] + fruityString + fruityString[0]);

let extratLetter = fruityString[0]

console.log(extraLetter + fruityString + extraLetter);

/**
 * Task 7
 * 
 * Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string.
 * 
 * The string length must be 3 or more
 * 
 * For example:
 * Starting string: Scritch
 * 
 * Expected output:
 * ```js
 * tchScritchtch
 * ```
 * 
 */

let falconRobot = "Scritch";

console.log(falconRobot.substring(4, 7) + falconRobot + falconRobot.substring(4, 7));


/**
 * Solutions:
 * 
 * let stringEnd = falconRobot.slice(4, 7);
 * 
 * console.log(stringEnd + falconRobot + stringEnd);   <--- Valid just for strings of length 7 and not in general.
 * 
 * let stringEnd = falconRobot.slice(length - 3);
 * let stringEnd = falconRobot.slice(-3);
 * let stringEnd = falconRobot.substring(falconRobot.slice(length - 3);
 * 
 */

/**
 * Task 9
 * 
 * Declare a variable and assign the value "the quick brown fox" (all in lower case).
 * 
 * Capitalize the first letter of that string and output the result to the console.
 * 
 * Expected output:
 * 
 * ```js
 * The quick brown fox
 * ```
 * 
 */

let robinHood = "t\bhe quick brown fox";

let uppercaseRobinHood =robinHood.toUpperCase();
 
console.log(uppercaseRobinHood.slice(0, 1) + robinHood);

// Up a wrong approach because you changed the variable's structure.

/**
 * Solutiions:
 * 
 * let robinHood = "the quick brown fox";
 * 
 *  "T"-> or: let upperCaseInitial = robinHood.slice(0, 1).toUpperCase();
 *        or: let initial = robinHood[.slice(]0].toUpperCase();
 *  "String - initial": let stringExcludingInitial = robinHood.slice(1);
 *                      let capitalizedString = upperCaseInitial + stringExcludingInitial;
 * console.log(capitalizedString)
 */

/**
 * Task 8
 * 
 * Create a new string from a given string by changing the position of the first and last characters.
 * 
 * The string length must be greater than or equal to 2
 * 
 * For example:
 * 
 * Starting string: BoogieWoogie
 * 
 * Expected output:
 * 
 * ```js
 * eoogieWoogiB
 * ```
 * 
 */

let strangeString = "B\boogieWoogie\b"

console.log(strangeString.substring(12, 13) + strangeString + strangeString.substring(0, 1));

// Wrong approach again.


/**
 * Solution:
 * 
 * let strangeString = "BoogieWoogie"
 * 
 * let fistLetter = strangeString[0];
 * let lastLetter = strangeString[strangeString.length - 1];
 * Version 1: let middlePart = strangeString.slice(1, 4);
 * Version 2: let middlePart = strangeString.slice(1, strangeString.length - 1);
 * Version 3: let middlePart = strangeString.slice(1, -1);
 * 
 * let stringLettersSwapped = lastLetter + middlePart + fistLetter;
 * 
 * console.log(stringLettersSwapped);
 * 
 */