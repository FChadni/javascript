//Reference Data Type
/** Array ~ ordered collection of items
 *
 */

let mixed = [1,2,3,4,5,undefined,null, "string", true]; // creating array
console.log("Mixed array: ",mixed);
// index       [0]       [1]        [2]
let fruits = ["apple", "mango", "strawberry"];
console.log("entire array: ",fruits);


console.log(""); // checking the type of array
console.log("data type of array: ",typeof fruits);
console.log("If it is an array: ",Array.isArray(fruits));

console.log(""); // arrays are mutable
fruits[1] = "tomato";
console.log("Changing Array Element: ", fruits);

console.log(""); // indexing array


console.log(""); // Adding to end of Array ~ push() ~ fast
fruits.push("raspberry");
console.log("Adding to end of Array: ",fruits);

console.log(""); // Remove from end of Array ~ pop() ~ fast
let deletedItem = fruits.pop();
console.log("Removing from end of Array: ",fruits, "," ,"Deleted item: ",deletedItem);

console.log(""); // Adding to beginning of Array ~ unshift() ~ more time
fruits.unshift("raspberry");
console.log("Adding to beginning of Array: ",fruits);

console.log(""); // Remove from end of Array ~ shift() ~ more time
deletedItem = fruits.shift();
console.log("Removing from beginning of Array: ",fruits, "," ,"Deleted item: ",deletedItem);



console.log(""); //check if Arrays are equal
let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,4,5];
console.log("references are different: ",arr1 === arr2); // references are different
console.log("If equal via string: ",arr1.toString() === arr2.toString()); // checks if equal
console.log("If Equal via every: ",arr1.every((i) => arr2.includes(i))); // checks if they have same element ordered or not

console.log("");
console.log(" ~ clone array ~ slice or concat or spread operator ~ "); //clone array
arr2 = arr1.slice(0); // fast
arr2 = [].concat(arr1);
arr2 = [...arr1]; //spread operator
arr1.push(6);
console.log("Changed arr1: ",arr1,",", "copied arr1: ",arr2);
arr2 = arr1.slice(0).concat(7,8);
arr2 = [].concat(arr1, [7,8]);
arr2 = [...arr1,7,8];
console.log("copied arr1 and added new items: ",arr2);

//03:26:12 For loop in array