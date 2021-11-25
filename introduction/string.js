/**
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 */
console.log("String quote:") //string with quote: escape
let str1 = "This is a \"quoted\" string";
let str2 = 'This is a "quoted" string';
let str3 = `"This is's a "quoted" string"`;
console.log(str1);
console.log(str2);
console.log(str3);
let str4 = "first line\n\t\\ second line\r\n third line\b\f";
console.log(str4);
console.log("");

console.log("Find length of String:", str1.length) //Find length of String
console.log("");

console.log("Indexing string:") //Bracket Notation
let strIndexStart = str1[0];
console.log(strIndexStart);
let strIndexEnd = str1[str1.length - 1];
console.log(strIndexEnd);
console.log("");


console.log("Concatenate String:") //Concatenate String "+" or "+="
let addStr1 = "first name " + "second name";
let addStr2 = "first name ";
addStr2 += "second name";
console.log(addStr1);
console.log(addStr2);
console.log("");

//Template string
let name = "Janney";
let age = 25;
let aboutMe = `Her name is ${name} and she is ${age} years old.`
console.log("Template String: ",aboutMe);
console.log("");


/** String Methods
 * trim()
 * toUpperCase()
 * toLowerVase()
 * slice()
 */
console.log("String Methods:");
let firstName = "  Janny "
firstName = firstName.trim(); //remove spaces using trim()
console.log("Trim: ",firstName.length);
console.log("Capital: ",firstName.toUpperCase()); //capital using toUpperCase()
console.log("Small: ",firstName.toLowerCase()); //small using toUpperCase()
console.log("Slice: ",firstName.slice(0,3)); //first 3 element using slice()
console.log("");


//convert number to string, convert string to number
age = 25;
let str = "25";
console.log("convert number to string: ",typeof (age + ""),",",typeof String(age),",",typeof toString(age))
console.log("convert number to string: ", typeof (+str),",",typeof Number(str),)
