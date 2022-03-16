// this is a comment

/*
this is a
multi-line
comment
*/


// numbers
2
4
9
100
-10
3.14
1,23456

// strings
"string"
"this is a string"
"this is another string"
'this is a string'
"100" // string that happens to contain a number

// carlo said "hello"
// "carlo said "hello""  <- this is wrong
'carlo said "hello"'
"this is a javascript string: 'string'"
"we are in 2022"
"" // this is an empty string

// booleans
true
false

// undefined
undefined

// null
null

/**
* a main difference between undefined and null:
* - undefined is the unintentional lack of value
* - null is intentional. We explicitly start with null, the sane way
* we would start with a 0
*/

/**
* Primitive values (primitive data type)
*
* - number
* - string
* - boolean
* - undefined
* - null
* - BigInt (we are not going to use this)
* - Symbol (we are not going to use this)
*
* Primitive values are immutable (they cannot be changed)
*
*/

/**
* Objects (non-primitive values)
* 
* - object
*   - array
*   - date
*   - ...
* - function
*
*/

console.log(2);
console.log(100);
console.log(21);
console.log("hello");
console.log("100");
console.log(true);
console.log(undefined);
console.log(null);
console.log("100" - 5);
console.log("100 - 5");
console.log("100" + 5);
console.log("100" + 5 - 5);
console.log("100" + "5" - 5);