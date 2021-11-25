//string with quote: escape
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

let str1 = "This is a \"quoted\" string";
let str2 = 'This is a "quoted" string';
let str3 = `"This is's a "quoted" string"`;
console.log(str1);
console.log(str2);
console.log(str3);
let str4 = "first line\n\t\\ second line\r\n third line\b\f";
console.log(str4);
console.log("");
//Find length of String
let lengthStr = str1.length;
console.log(lengthStr);
console.log("");

//Bracket Notation
let strIndexStart = str1[0];
console.log(strIndexStart);

let strIndexEnd = str1[str1.length - 1];
console.log(strIndexEnd);
console.log("");

//Concatenate String "+" or "+="
let addStr1 = "first name " + "second name";
let addStr2 = "first name ";
addStr2 += "second name";
console.log(addStr1);
console.log(addStr2);
console.log("");


/** String Methods
 * trim()
 * toUpperCase()
 * toLowerVase()
 * slice()
 */
let firstName = "  Janny "
console.log(firstName.length);
firstName = firstName.trim(); //remove spaces using trim()
console.log(firstName.length);
console.log(firstName.toUpperCase()); //capital using toUpperCase()
console.log(firstName.toLowerCase()); //small using toUpperCase()
console.log(firstName.slice(0,3)); //first 3 element using slice()

//01:09:11 typeof , string to number, number to string conversion
