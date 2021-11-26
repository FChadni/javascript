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
let num3 = BigInt(12345678901234567890);
console.log(Number.MAX_SAFE_INTEGER, num, num3);


/** Primitive vs Reference Datatype
 *  Primitive ~ cannot be change by reference (stored in stack)
 *  Reference ~ can be change by reference (stored in heap and pointer in stack)
 */
console.log(" ~ Primitive ~ ")
let num1 = 5;
let num2 = num1;
console.log("Num1: ",num1,",","Num2: ", num2);
num1 = 6;
console.log("Num1: ",num1,",","Num2: ", num2);

console.log(" ~ Reference ~ ")
let arr1 = [6,7];
let arr2 = arr1;
console.log("arr1: ",arr1,",","arr2: ", arr2);
arr1[0] = 7;
console.log("arr1: ",arr1,",","arr2: ", arr2);
