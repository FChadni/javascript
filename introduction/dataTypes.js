/** Data Types (primitive data types)
 * String ~
 * Number ~
 * Boolean ~
 * Undefined ~
 * Null ~
 * BigInt ~
 * Symbol ~
 */

//undefined, cannot set to const
let val;
console.log("no assignment: ",val);

//null, console.log(typeof val2) ~ it's a bug when it returns object
let val2 = null;
console.log(val2);

//bigInt
let num = 12345678901234567890;
let num2 = BigInt(12345678901234567890);
console.log(Number.MAX_SAFE_INTEGER, num, num2);


//01:31:00 Booleans and comparison Operators